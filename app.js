// const num = Math.floor(Math.random() * 5);
// const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

// switch (num) {
//   case 1: 
//     console.log("1");
//     break;
//   case 2: 
//     console.log("2");
//     break;
//   case 3: 
//     console.log("3");
//     break;
//   case 4: 
//     console.log("4");
//     break;
//   default:
//     console.log("0")
// };

// switch (days[num]) {
//   case "monday":
//     console.log("Monday");
//     break;
//   case "tuesday":
//     console.log("Tuesday");
//     break;
//   case "wednesday":
//     console.log("Wednesday");
//     break;
//   case "thursday":
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Friday");
// }

// const numbers = [2,45,83,904,6,2,900];
// console.log(numbers);
// const sortedNum = numbers.sort((a,b) => {
//   return a - b;
// });
// console.log(sortedNum);


// const secret = 'punt';

// let guess = prompt("enter secret code");
// while (guess !== secret) {
//   guess = prompt("enter secret code");
// }

// console.log("Congrats, you got it");

// let input = prompt('say something');


// WHILE LOOPS

// while(true) {
//   input = prompt(input);
//   if (input === "stop copying me") {
//     break;
//   }
// }


// GUESSING GAME

// let maximum = parseInt(prompt("Enter maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("enter a number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess (enter 'q' to quit)");
// let guesses;
// if (guess === 'q' || !(parseInt(guess))) {
//   guesses = 0;
// } else { guesses = 1; }

// while (parseInt(guess) !== targetNum) {
//   if (guess === 'q') break;
//   guess = parseInt(guess);
//   if (guess > targetNum) {
//     guess = prompt("too High, guess again");
//     if (guess === 'q') break;
//     if (parseInt(guess)) guesses++;
//   } else if (guess < targetNum) {
//     guess = prompt("too low, guess again");
//     if (guess === 'q') break;
//     if (parseInt(guess)) guesses++;
//   } else {
//     while (!guess) {
//       guess = prompt("Invalid input, Please enter a number or 'q' to quit.")
//       if (guess === 'q') break;
//       guess = parseInt(guess);
//     }
//     if (guess !== 'q') { guesses++ };
//   }
// }

// if (guess === 'q') {
//   console.log(`You cunt quitter. ${guesses} guesses.`)
// } else {
// console.log(`you got the cunt! The number is ${targetNum}, took you ${guesses} guesses, you cunt`);
// }


// FUNCTIONS---------

// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch (err) {
//     console.log(`${err} ya fucktunt`);
//   }
// }

// yell(3);



// FOREACH---------

// const numbers = [1,2,3,4,5,6,7,8,9,10];

const movies = [
  {
    title: "Babe",
    score: 100,
    year: 1994
  },
  {
    title: "Alien",
    score: 89,
    year: 2006
  },
  {
    title: "Pulp Fiction",
    score: 98,
    year: 1995
  },
  {
    title: "Gunter Toody",
    score: 83,
    year: 2019
  }
];

// numbers.forEach((el) => {
//   if (el % 2 === 0)
//   console.log(`${el} is even`);
// })

// movies.forEach((mov) => {
//   console.log(`${mov.title} - ${mov.score}`);
// })

// const powers = numbers.map((num) => {
//   console.log(num ** num);
//   return num ** num;
// })

// const movieTitles = movies.map((mov) => {
//   return mov.title;
// })

// console.log("Hello")
// setTimeout(() => {
//   console.log('Still there?')
// }, 2000);
// console.log('goodbye');

// const id = setInterval(() => {
//   console.log(Math.random())
//   console.log(id);
// }, 500);

// setTimeout(() => {
//   clearInterval(id);
// }, 5000)


// const evens = numbers.filter(num => num % 2 === 0);
// const odds = numbers.filter(num => num % 2 !== 0);

// console.log(`Evens ${evens}`);
// console.log(`Odds ${odds}`);

// const goodTitles = movies.filter(mov => mov.score > 90).map(mov => mov.title);
// console.log(`good titles: ${goodTitles}`);

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce((acc, curr) => acc + curr, 0);
// console.log(`total: ${total}`);

// const manTotal = 9.99 + 1.50 + 19.99 + 49.99 + 30.50;
// console.log(manTotal);

// const getAverage = (numberArray) => {
//   const total = prices.reduce((acc, curr) => acc + curr, 0);
//   return total / numberArray.length;
// }

// console.log("average:");
// console.log(getAverage(prices));


// const person = {
//   firstName: 'Viggy',
//   lastName: 'Mortenson',
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(() => {
//       console.log(this.fullName());
//     }, 3000)
//   }
// }

// const nums = [2,4,8,5,5,545,76,89,54,12,4,];

// const dogs = ['fido', 'gilda'];
// const cats = ['shrek', 'constance', 'eric'];
// const allPets = [...dogs, ...cats];

// console.log(Math.max(...nums));

// const foxes = {
//   isFurry: true,
//   terrain: 'land',
//   food: 'rabbits',
//   curiosity: 'high'
// }

// const whales = {
//   isFurry: false,
//   terrain: 'water',
//   food: 'plankton',
//   swims: true
// }

// console.log({...foxes, ...whales});



//******* arguments WORKS */
// function sumAll () {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

//********* arguments DOESNT WORK IN ARROW FUNCTIONS */
// const sumAll = () => {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

//***  DESTRUCTURING */

// const scores = [1234, 2443, 34554, 5443, 654];

// let [gold, silver] = scores;

// const user = {
//   email: 'guntherToody@gmail',
//   password: 'trcktunt',
//   firstName: 'Havey',
//   lastName: 'Gunther',
//   born: 1955,
//   died: 2010,
//   city: 'San Francisco',
//   state: 'California'
// };

// const { firstName: first, lastName: last, city, state } = user;

// console.log(`${first} ${last} from ${city} ${state}`);


// const bestMovies = movies.map(({score}) => {
//   if (score >= 90) {
//     return 'yes';
//   } else {return 'no';}
// });