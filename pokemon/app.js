const target = document.querySelector('.container');

for (let i = 1; i < 151; i++) {
  let img = document.createElement('img');
  img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
  target.appendChild(img);
}

