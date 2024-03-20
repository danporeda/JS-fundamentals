const randoNum = () => {
  return Math.floor(Math.random() * 256);
};

const makeColor = () => {
  const r = randoNum();
  const g = randoNum();
  const b = randoNum();
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll('button');

// const changeBgColor = (el) => {
//   return el.style.backgroundColor = makeColor();
// }

// for (let button of buttons) {
//   button.addEventListener('click', changeBgColor(button))
// }

function colorize() {
  this.style.backgroundColor = makeColor();
}
for (let button of buttons) {
  button.addEventListener('click', colorize)
}