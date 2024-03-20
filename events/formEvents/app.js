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


