//conditionals
const age = 4;

// switch (age) {
//   case 1:
//     console.log("hes just a baby");
//     break;
//   case 2:
//     console.log("he is a teenager");
//     break;
//   case 3 || 4:
//     console.log("hes becoming an adult");
//     break;
//   default:
//     console.log("he is old");
// }

//for loop
// for (let i = 0; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i, "even");
//   } else {
//     console.log(i, "odd");
//   }
// }

// make a for loop that counts to 100 from 1
// if the current number is divisible by 3 then console.log 'Fizz'
// if the current number is divisible by 5 then console.log 'Buzz'
// if the current number is divisible by 3 and 5 then console.log 'Fizz Buzz'
//else... just console.log the number
// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

//while loop
// let num = 11;
// while (num < 10) {
//   console.log(num);
//   num++;
// }
//do while loop
// do {
//   console.log("inside the do while", num);
// } while (num < 10);

//************Functions************/
//declaring a function and invoking a function
//two ways to create a function
// the function keyword
const num1 = 2;
const num2 = 3;

function addTwoNums(pizza1, pizza2) {
  return pizza1 + pizza2;
}
// console.log(num1 , num2)
//invoke the function
const sum1 = addTwoNums(2, 3);
const sum2 = addTwoNums(30, 45);
// console.log(sum1, sum2);
// with the fat arrow syntax
const subtractTwoNums = (pizza3, pizza4) => {
  return pizza3 - pizza4;
};
//calling or invoking a arrow function
const difference = subtractTwoNums(40, 22);
// console.log(difference);

// *************** Arrays***************
const arrayOfPets = [
  "Ragnar",
  "Sam",
  "Leonidas",
  "Buddy",
  135,
  true,
  subtractTwoNums,
  ["Emidio", "Fabian", "Claire"],
];
//***********array methods *******/
arrayOfPets.push("kuku");
arrayOfPets.pop();

arrayOfPets.unshift("kuku");
arrayOfPets.shift();

// *************.splice*************
// takes a starting index and a delete count
//optionally splice can take more than two arguments for things to add to the array in that spot
//remove the second element from the array
// console.log("before", arrayOfPets);
// arrayOfPets.splice(2, 1, "cool cat name", "second cool  dog name");

// console.log("after", arrayOfPets[8][1]);

// //********.forEach */
// arrayOfPets.forEach((x, index, wholeArray)=> {
// //   console.log("hello", x, index, wholeArray);
// });

//************function examples *******/
const arrayOfNumbers = [1, 2, 3, 4];
const arrayOfNumbers2 = [];
function sumNumbersInArray(arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
}

// const theTotal1 = sumNumbersInArray(arrayOfNumbers);
// const theTotal2 = sumNumbersInArray(arrayOfNumbers2);
// console.log(theTotal1, theTotal2);
// function that averages the nums in an array
function averageNumsInArray(numsArray) {
  const sum = sumNumbersInArray(numsArray);
  return sum / numsArray.length;
}
const average = averageNumsInArray(arrayOfNumbers);
// console.log(average);

//remove duplicates from an array
const arrayOfNames = [
  "Fabian",
  "Ragnar",
  "Joshua",
  "Fabian",
  "Pau",
  "Pau",
  "Fabian",
  "Fabian",
  "Joshua",
  "Joshua",
];

function removeDuplicates(nameArray) {
  const uniqueArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    const currentName = nameArray[i];
    if (!uniqueArray.includes(currentName)) {
      uniqueArray.push(currentName);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates(arrayOfNames));
