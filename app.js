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

let maximum = parseInt(prompt("Enter maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("enter a number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (enter 'q' to quit)");
let guesses;
if (guess === 'q' || !(parseInt(guess))) {
  guesses = 0;
} else { guesses = 1; }

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("too High, guess again");
    if (guess === 'q') break;
    if (parseInt(guess)) guesses++;
  } else if (guess < targetNum) {
    guess = prompt("too low, guess again");
    if (guess === 'q') break;
    if (parseInt(guess)) guesses++;
  } else {
    while (!guess) {
      guess = prompt("Invalid input, Please enter a number or 'q' to quit.")
      if (guess === 'q') break;
      guess = parseInt(guess);
    }
    if (guess !== 'q') { guesses++ };
  }
}

if (guess === 'q') {
  console.log(`You cunt quitter. ${guesses} guesses.`)
} else {
console.log(`you got the cunt! The number is ${targetNum}, took you ${guesses} guesses, you cunt`);
}