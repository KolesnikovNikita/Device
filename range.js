var nonLinearSlider = document.getElementById("slider");
const maxRange = document.getElementById("max-price-field");
const minRange = document.getElementById("min-price-field");

noUiSlider.create(nonLinearSlider, {
  connect: true,
  behaviour: "tap",
  start: [500, 4000],
  range: {
    min: [0],
    max: [10000],
  },
});

var nodes = [
  document.getElementById("lower-value"), // 0
  document.getElementById("upper-value"), // 1
];

nonLinearSlider.noUiSlider.on("update", function (values, handle) {
  nodes[handle].innerHTML = Math.round(Number(values[handle]));
  if (handle === 0) {
    minRange.value = Math.round(values[0]);
  } else if (handle === 1) {
    maxRange.value = Math.round(values[1]);
  }
});
