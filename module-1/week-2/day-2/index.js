//with function keyword
function add(num1, num2) {
  console.log("inside the function", arguments);
  return num1 + num2;
}
// console.log(add(2, 3, 5, 6));

const arrayOfNumbers = [2, 3, 4, 5];
const students = [
  { name: "Fabian", isGoodStudent: true, country: "Germany" },
  { name: "Pau", isGoodStudent: true, country: "Spain" },
  { name: "Emidio", isGoodStudent: true, country: "Portugal" },
  { name: "Vera", isGoodStudent: true, country: "Portugal" },
];
//********************.map **************/
const multThreeArray = arrayOfNumbers.map(function (oneNum, index, wholeArray) {
  //   console.log(oneNum, index);
  return oneNum * 3;
});
// console.log(multThreeArray);
// create an array of only student names
const arrayOfNames = students.map((oneStudent) => {
  //   console.log(oneStudent.name);
  return `${oneStudent.name} is from ${oneStudent.country} and are they a good student ${oneStudent.isGoodStudent}`;
});
//oneline version
const arrayOfNamesOneliner = students.map((stud) => stud.name);
// console.log(arrayOfNamesOneliner);
//***************.filter() ************* */

//oneliner solution
const studentsInPortugal = students.filter((student) => {
  if (student.country === "Germany") {
    return true;
  }
});
//   .map((oneStudent) => {
//     return oneStudent.name;
//   });
//oneliner solution
// const studentsInPortugalOneLiner = students.filter(
//   (student) => student.country === "Portugal"
// )

console.log("students in Portugal", studentsInPortugal);
//********************* .reduce() ***********/
const products = [
  {
    title: "TV",
    category: "Electronic",
    price: 250,
    quantity: 1,
  },
  {
    title: "Mouse",
    category: "Electronic",
    price: 55,
    quantity: 1,
  },
  {
    title: "Bananas",
    category: "Food",
    price: 5,
    quantity: 3,
  },
  {
    title: "Dog Food",
    category: "Food",
    price: 55,
    quantity: 1,
  },
  {
    title: "Pizzas",
    category: "Food",
    price: 12,
    quantity: 30,
  },
];
// const total = arrayOfNums.reduce((accumulator, currentElement) => {
//     //   console.log(accumulator, currentElement);
//     return accumulator + currentElement;
// });
// console.log(total);
// PEMDAS;
const cartTotal = products.reduce((acc, product) => {
  if (typeof product.price === "number") {
    return acc + product.price * product.quantity;
  } else {
    return acc;
  }
}, 0);
// console.log("cart total", cartTotal);
// console.log("total", total);

const arrayOfNums = [235, 100, 4000, 22, 41, 5];
//****************sort *************** */
// arrayOfNums.sort((currentElement, nextElement) => {
//   if (currentElement > nextElement) {
//     return -1;
//   } else if (currentElement < nextElement) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
arrayOfNums.sort((a, b) => b - a);

// products.sort((curr, next) => {
//   if (curr.price > next.price) {
//     return 1;
//   } else if (curr.price < next.price) {
//     return -1;
//   } else {
//     if (curr.title > next.title) {
//       return 1;
//     } else if (curr.title < next.title) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
// });
const sortedArray = products.toSorted((curr, next) => {
  if (curr.price > next.price) {
    return 1;
  } else if (curr.price < next.price) {
    return -1;
  } else {
    if (curr.title > next.title) {
      return 1;
    } else if (curr.title < next.title) {
      return -1;
    } else {
      return 0;
    }
  }
});

// ************* .reverse************
// console.log("before", products);
const reversedProducts = products.toReversed();
// console.log(products, reversedProducts);
