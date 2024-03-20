const btn = document.querySelector('#v2');

btn.onclick = function(){
  console.log("you clicked my");
  console.log("shitt");
}

function scream() {
  console.log('stop touching me');
};
const ah = () => {
  console.log('ahh');
};
btn.onmouseenter = scream;
btn.onmouseleave = ah;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
  console.log('ayyy');
})

function twist() {
  console.log("Twist");
}
function shout() {
  console.log("Shout");
}
const btn4 = document.querySelector('#v4');
btn4.addEventListener('click', () => {
  twist();
  shout();
})


// RANDOM BACKGROUND COLOR
const randoNum = () => {
  return Math.floor(Math.random() * 256);
};

const makeColor = () => {
  const r = randoNum();
  const g = randoNum();
  const b = randoNum();
  if (r + g + b < 200) {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "black";
  }
  return `rgb(${r},${g},${b})`;
};

const btn5 = document.querySelector('#v5');
btn5.addEventListener('click', () => {
  const newColor = makeColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('#rgb').innerText = newColor;
});


