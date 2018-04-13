const container = document.querySelector('#container');

function createGrid(gridUnits) {
  for (gridUnits; gridUnits > 0; gridUnits--) {
    const gridBox = document.createElement('div');
    boxParameters(gridBox);
    container.appendChild(gridBox);
  }

  let gridBoxSelection = document.querySelectorAll(".gridBox");
  gridBoxSelection.forEach ( gridBox => gridBox.addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = "purple";
  }));
}

function boxParameters(gridBox) {
  gridBox.classList.add('gridBox');
}
//set flex size to [container size / boxes per row - 2px (due to margin)]
