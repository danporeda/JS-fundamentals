const form = document.querySelector('#shelterForm');
const catName = document.querySelector('#catName');
const catList = document.querySelector('#cats');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const newCat = catName.value;
  const catGender = form.elements.gender.value;
  addNewCat(newCat, catGender);
});

const addNewCat = (newCatname, gender) => {
  const newLi = document.createElement('li');
  const newUl = document.createElement('ul');
  const genderLi = document.createElement('li');
  newLi.innerText = newCatname;
  genderLi.innerText = gender;
  newLi.append(newUl);
  newUl.append(genderLi);
  catList.appendChild(newLi);
  catName.value = "";
  document.querySelectorAll('input')[1].value = "";
}

catName.addEventListener('input', (e) => {
  console.log(e);
  if (e.data === '!') {
    console.log(catName.value);
  } else {
    console.log(e.data);
  }
})

const randoNum = () => {
  return Math.floor(Math.random() * 256);
};
const makeColor = () => {
  const r = randoNum();
  const g = randoNum();
  const b = randoNum();
  return `rgb(${r},${g},${b})`;
};

const container = document.querySelector('#container');
const changeButton = document.querySelector('#changeColor');
const sup = document.querySelector('#super');

sup.addEventListener('click', function() {
  container.classList.toggle('hide');
});

changeButton.addEventListener('click', function(e) {
  container.style.backgroundColor = makeColor();
  e.stopPropagation();
})

catList.addEventListener('click', (e) => {
  e.target.nodeName === 'LI' && e.target.remove();
})