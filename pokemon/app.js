const target = document.querySelector('.container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 1026; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const label = document.createElement('span');
  const img = document.createElement('img');
  img.setAttribute('src', `${baseURL}${i}.png`);
  // img.src = `${baseURL}${i}.png`;
  label.innerText = `(${i})`;
  pokemon.appendChild(img);
  pokemon.appendChild(label);
  target.appendChild(pokemon);
}

