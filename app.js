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


const secret = 'CUNT';

let guess = prompt("enter secret code");
while (guess !== secret) {
  guess = prompt("enter secret code");
}