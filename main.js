let etch = document.querySelector('#etch');
for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement('div');
  div.classList.add('pixel');
  etch.appendChild(div);
}
