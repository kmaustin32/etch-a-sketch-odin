const container = document.querySelector('#container');
const btnGrid = document.querySelector('button');
let tileNum = 0;

btnGrid.addEventListener('click', (e) => {
  while (isNaN(tileNum) || tileNum > 60 || tileNum < 10) {
    tileNum = prompt('Please pick a number between 10 and 60.')
    tileNum = parseInt(tileNum);

    console.log(`final num: ${tileNum}`)
  };
});

