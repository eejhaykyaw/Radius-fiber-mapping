const tubeColors = [
  "Blue", "Orange", "Green", "Brown", "Slate",
  "White", "Red", "Black", "Yellow", "Violet",
  "Rose", "Aqua", "Lime", "Pink", "Gray", "Olive"
];

const fiberColors = tubeColors.slice(0, 12); // 12 standard fiber colors

window.onload = function() {
  populateSelect("tubeColor", tubeColors);
  populateSelect("fiberColor", fiberColors);
};

function populateSelect(id, values) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  values.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    select.appendChild(option);
  });
}

function calculateColor() {
  const fiberNumber = parseInt(document.getElementById("fiberNumber").value);
  const cableSize = parseInt(document.getElementById("cableSize").value);
  const resultDiv = document.getElementById("colorResult");

  if (fiberNumber < 1 || fiberNumber > cableSize) {
    resultDiv.textContent = "Invalid fiber number for selected cable size.";
    return;
  }

  const fibersPerTube = 12;
  const tubeIndex = Math.floor((fiberNumber - 1) / fibersPerTube);
  const fiberIndex = (fiberNumber - 1) % fibersPerTube;

  resultDiv.textContent = `Tube #${tubeIndex + 1} (${tubeColors[tubeIndex]}) - Fiber: ${fiberColors[fiberIndex]}`;
}

function calculateFiberNumber() {
  const tubeColor = document.getElementById("tubeColor").value;
  const fiberColor = document.getElementById("fiberColor").value;
  const cableSize = parseInt(document.getElementById("cableSize2").value);
  const resultDiv = document.getElementById("fiberResult");

  const tubeIndex = tubeColors.indexOf(tubeColor);
  const fiberIndex = fiberColors.indexOf(fiberColor);

  if (tubeIndex === -1 || fiberIndex === -1) {
    resultDiv.textContent = "Invalid color selection.";
    return;
  }

  const fiberNumber = tubeIndex * 12 + fiberIndex + 1;

  if (fiberNumber > cableSize) {
    resultDiv.textContent = "Fiber number exceeds cable size.";
    return;
  }

  resultDiv.textContent = `Fiber Number: ${fiberNumber}`;
}