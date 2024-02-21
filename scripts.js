const container = document.querySelector('#container');
const btnGrid = document.querySelector('#ch-btn');
const clearBtn = document.querySelector('#clear');
let tileNum = 0;

btnGrid.addEventListener('click', (e) => {
  let promptActive = true;

  while (promptActive) {
    if (isNaN(tileNum) || tileNum > 64 || tileNum < 8) {
      tileNum = prompt('Please pick a number between 8 and 64.')
      tileNum = parseInt(tileNum);
      console.log(`final num: ${tileNum}`)
    } else {
      promptActive = false;
      removeGrid();
      initializeGrid(tileNum);
    };
  };
  tileNum = 0;
});

clearBtn.addEventListener('click', (e) => {
  let tiles = document.querySelectorAll('.cell');

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove('colored');
  };
});

const initializeGrid = (gridSize) => {
  let docFrag = new DocumentFragment();

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      let tile = document.createElement('div');
      tile.classList.add('cell');
      row.appendChild(tile);
    };
    docFrag.appendChild(row);
  };
  container.appendChild(docFrag);
};

const removeGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  };
};

// Adds 'click' event listener to each cell after grid initialized
function addContainerEvent() {
  container.addEventListener('click', (e) => {
    e.target.classList.add('colored');
    let tiles = document.querySelectorAll('.cell');
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener('mouseover', (e) => {
      e.target.classList.toggle('colored');
      });
    };
  });
};

initializeGrid(16);
addContainerEvent();