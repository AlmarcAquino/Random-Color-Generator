const wrapperEl = document.querySelector('.wrapper');
const colorTypeEl = document.querySelector('.color__type');
const colorValueEl = document.querySelector('.color__value');
const colorBtns = document.querySelectorAll('.btn');

colorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.innerHTML === 'RGB') {
      generateRandomColor('RGB');
    } else if (btn.innerHTML === 'Hex') {
      generateRandomColor('Hex');
    }
  });
});

function generateRandomColor(type) {
  if (type === 'RGB') {
    let rgbArr = [];
    for (let i = 0; i < 3; i++) {
      rgbArr.push(Math.floor(Math.random() * (256 - 0) + 0));
    }
    colorValueEl.innerHTML = `RGB (${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
    wrapperEl.style.backgroundColor = `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
  } else if (type === 'Hex') {
    let randHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorValueEl.innerHTML = randHex;
    wrapperEl.style.backgroundColor = randHex;
  }
  return;
}
