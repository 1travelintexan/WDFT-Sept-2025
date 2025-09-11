//global variable
// const dog = "Ragnar";

// if (2 + 2 === 4) {
//   const insideTheIfStatement = "blah blah";
//   console.log("inside the if", insideTheIfStatement);
// }

// function add(num1, num2) {
//   const total = num1 + num2;
//   if (3 + 3 === 6) {
//     console.log("inside a function", dog, total);
//   }
// }
// // console.log("outside the function", total);
// add(2, 3);

// Hoisting
// subtract(5, 2);

// console.log(name);
var name = "Sam";

//hoisting with functions
function subtract(a, b) {
  console.log(a - b, variable);
  const variable = "testing";
  return a - b;
}

const multiply = (a, b) => {
  console.log("inside the arrow function", a * b);
  return a * b;
};

//************copies */
let num1 = 3;
let num2 = num1;
// num1 = 10;
//with arrays
const arr1 = [1, 2, 3, [4, 5, 6]];
//try to avoid copying arrays and objects like this
const arr5 = arr1;
// arr2.push(7, 7, 7);
// console.log({ arr1, arr2 });

//spread operator which is just the ... inside of an array
const arr2 = [...arr1];
const obj1 = {
  name: "Ragnar",
};
const obj2 = obj1;
obj1.age = 4;
//true deep copy is with JSON parse and JSON stringify
const obj3 = JSON.parse(JSON.stringify(obj1));
//the new deep copy is the structured clone
const arr4 = structuredClone(arr1);
arr4[3].push("testing the clone");
// arr3[3].push("hello world");
arr1.push(100);
// console.log({ obj1, obj2, obj3 });

//variables
const startBtnElement = document.getElementById("start-btn");
const timeNumberElement = document.getElementById("time-number");
const resetBtnElement = document.querySelector("#reset-btn");
startBtnElement.style.backgroundColor = "green";
//****************setTimeout */
// console.log("immediately");
// setTimeout(() => {
//   console.log("inside the timeout");
// }, 2000);

//***********setInterval */
let number = 0;
let intervalId;
startBtnElement.addEventListener("click", () => {
  //this changes the text of the start button to stop and vice versa
  if (startBtnElement.innerText === "Start") {
    startBtnElement.innerText = "Stop";
    startBtnElement.style.backgroundColor = "red";
    //this is the timer interval that runs every 1000 milliseconds or one second
    intervalId = setInterval(() => {
      console.log(number);
      number++;

      //update the DOM to the new number
      if (number > 10) {
        //this is what stops the loop
        clearInterval(intervalId);
      }
      timeNumberElement.innerText = number;
    }, 1000);
  } else {
    startBtnElement.innerText = "Start";
    startBtnElement.style.backgroundColor = "green";
    clearInterval(intervalId);
  }
});

resetBtnElement.addEventListener("click", () => {
  clearInterval(intervalId);
  timeNumberElement.innerText = 0;
  startBtnElement.innerText = "Start";
  startBtnElement.style.backgroundColor = "green";
  number = 0;

  //this reloads the page via js
  //   window.location.reload();
});
