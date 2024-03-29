const form = document.querySelector('#searchForm');
const input = document.querySelector('#query');
const api = 'http://api.tvmaze.com/search/shows?q=';
const container = document.querySelector('.container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(api, config);
  console.log(res.data);
  makeImages(res.data);
  form.elements.query.value = "";
})

const makeImages = (showArr) => {
  for (i of showArr) {
    // if (i.show.image) {
    //   const img = document.createElement('img');
    //   img.src = i.show.image.medium;
    //   container.append(img);
    // }
    try {
      const img = document.createElement('img');
      img.src = i.show.image.medium;
      container.append(img);
    } catch {
      const placeHolder = document.createElement('div');
      placeHolder.classList.add('noImg');
      const elementContainer = document.createElement('div');
      elementContainer.classList.add('elCont');
      const text1 = document.createElement('div');
      const text2 = document.createElement('div');
      text1.innerText = i.show.name;
      text2.innerText = '(No Image Available)';
      elementContainer.appendChild(text1);
      elementContainer.appendChild(text2);
      placeHolder.appendChild(elementContainer);
      container.appendChild(placeHolder);
    }
  }
};