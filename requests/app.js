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
