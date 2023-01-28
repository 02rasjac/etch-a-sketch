let etch = document.querySelector('#etch');
document.querySelector('button').addEventListener('click', () => {
  let input = prompt('Change the grid size (default is 16). Enter only a number, the grid is square.');
  if (!isNaN(input)) {
    console.log('test');
    generateGrid(input);
  }
});

function generateGrid(gridSize = 16) {
  etch.textContent = '';
  etch.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  etch.style.gridTemplateRow = `repeat(${gridSize}, 1fr)`;

  const divSize = 960 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement('div');
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.addEventListener('mouseover', color);
    etch.appendChild(div);
  }
}

function color(e) {
  e.target.classList.add('colored');
}

generateGrid();
