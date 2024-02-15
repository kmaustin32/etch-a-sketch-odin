const container = document.querySelector('#container');
const btnGrid = document.querySelector('button');
let tileNum = 0;

btnGrid.addEventListener('click', (e) => {
  while (isNaN(tileNum) || tileNum > 60 || tileNum < 10) {
    tileNum = prompt('Please pick a number between 10 and 60.')
    tileNum = parseInt(tileNum);
    console.log(`final num: ${tileNum}`)
    
    removeGrid();
    initializeGrid(tileNum);
  };
  tileNum = 0;
});

const initializeGrid = (gridSize) => {
  let docFrag = new DocumentFragment();

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      let tile = document.createElement('div');
      tile.classList.add('cell');
      
      tile.addEventListener('mouseover', (e) => {
        tile.classList.toggle('colored');
      });

      // tile.textContent = j + 1;
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

initializeGrid(16);