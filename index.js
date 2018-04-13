const container = document.querySelector('#container');
const btnSixteen = document.querySelector('#sixteen');
const btnSixtyFour = document.querySelector('#sixtyFour');
btnSixteen.onclick = () => createGrid(16);
btnSixtyFour.onclick = () => createGrid(64);

function createGrid(gridLength) {
  let gridUnits = gridLength * gridLength;
  for (gridUnits; gridUnits > 0; gridUnits--) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
  }
  let gridBoxSelection = document.querySelectorAll(".gridBox");
  boxParameters(gridLength, gridBoxSelection);
  etchaColor(gridBoxSelection);
}

function boxParameters(gridLength, gridBoxSelection) {
  if (gridLength == 16) {
    gridBoxSelection.forEach ( gridBox => gridBox.classList.add('gridLengthSixteen'));
  } else if (gridLength == 64) {
    gridBoxSelection.forEach ( gridBox => gridBox.classList.add('gridLengthSixtyFour'));
  }
}

function etchaColor(gridBoxSelection) {
  gridBoxSelection.forEach ( gridBox => gridBox.addEventListener("mouseenter", function(event) {
    event.target.classList.add('toBlack');
  }));
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearCanvas);
function clearCanvas() {
  let toBeCleared = container.firstChild;
  while( toBeCleared) {
    container.removeChild(toBeCleared);
    toBeCleared = container.firstChild;
  }
}
//set flex size to [container size / boxes per row - 2px (due to margin)]
