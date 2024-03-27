// XHR Requests:

// const req = new XMLHttpRequest();

// req.onload = function() {
//   console.log('it loaded');
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data.height);
//   console.log(data);
// }

// req.onerror = function() {
//   console.log('ERROR');
//   console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();


// FETCH requests:

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log(res.json());
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((data) => {
//     console.log(data.json());
//     return fetch("https://swapi.dev/api/people/3/");
//   })
//   .then((data) => {
//     console.log(data.json());
//     return fetch("https://swapi.dev/api/people/4/");
//   })
//   .then((data) => {
//     console.log(data.json());
//     return fetch("https://swapi.dev/api/people/5/");
//   })
//   .catch((e) => {
//     console.log('error', e)
//   })

const loadStarWars = async (num) => {
  for (let i = 1; i <= num; i++) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${i}/`);
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log('errorrrr', e);
    }
  }
};

// const person17 = async () => {
//   try {
//     const res = await fetch('https://swapi.dev/api/people/17/');
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log('ERRORORRRR');
//     console.log(err);
//   }
// };
// person17();


//   AXIOS

// axios.get('https://swapi.dev/api/people/11/')
// .then((res) => {
//   console.log('response: ', res)
// })
// .catch(e => {
//   console.log('error', e);
// })

const axiosStarWars = async (num) => {
  for (let i = 1; i <= num; i++) {
    try {
      const res = await axios.get(`https://swapi.dev/api/people/${i}/`);
      console.log(res.data);
    } catch (e) {
      console.log('eroorr', e);
    }
  }
}

// const btcUsd = async () => {
//   const res = await axios.get('https://api.cryptonator.com/api/btc-usd/ticker');
//   console.log(res.data);
// }

// const url = 'https://api.cryptonator.com/api/btc-usd/ticker';

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data.ticker))
//   .catch(e => console.log('error', e));

const p = document.querySelector('#data');
const button = document.querySelector('#getJoke');

const getDadJoke = async () => {
  try {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (e) {
    console.log('error: ', e);
    return 'No Jokes Available!!';
  }
}
const addNewJoke = async () => {
  const joke = await getDadJoke();
  const newJoke = document.createElement('p');
  newJoke.innerText = joke;
  p.appendChild(newJoke);
}

button.addEventListener('click', addNewJoke);