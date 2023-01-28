// Generate a grid of divs
let etch = document.querySelector('#etch');
for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement('div');
  div.classList.add('pixel');
  div.addEventListener('mouseover', color);
  etch.appendChild(div);
}

function color(e) {
  e.target.classList.add('colored');
}
