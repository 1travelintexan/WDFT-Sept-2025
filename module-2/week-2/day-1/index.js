const morningRoutine = ["wake up", "drink coffee", "walk Ragnar", "go to work"];

function doMorningRoutine(index, callback, errorCallback) {
  setTimeout(() => {
    if (!morningRoutine[index]) {
      errorCallback("invalid index input");
      return;
    } else {
      console.log(morningRoutine[index]);
      callback();
    }
  }, 1000);
}
function sayHi() {
  console.log("hello");
}
function sayGoodbye() {
  console.log("goodbye!!!");
}

// doMorningRoutine(
//   0,
//   () => {
//     doMorningRoutine(
//       1,
//       () => {
//         doMorningRoutine(
//           2,
//           () => {
//             doMorningRoutine(
//               3,
//               () => {
//                 console.log("we finished!");
//               },
//               (theError) => {
//                 console.log(theError);
//               }
//             );
//           },
//           (theError) => {
//             console.log(theError);
//           }
//         );
//       },
//       (theError) => {
//         console.log(theError);
//       }
//     );
//   },
//   (theError) => {
//     console.log(theError);
//
// );

let index = 0;

//*************** Promises**************/
//creating a promise
const ourPromise = new Promise((resolve, reject) => {
  if (morningRoutine[index]) {
    resolve(morningRoutine[index]);
  } else {
    reject("There is no routine at that index");
  }
});
//our second promise
const ourPromise2 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("the second promise was good");
  } else {
    reject("second promise failed");
  }
});
//consuming the promise with .then and .catch
// ourPromise
//   .then((successMessage1) => {
//     console.log(successMessage1, index);
//     index += 1;
//     return ourPromise;
//   })
//   .then((successMessage2) => {
//     console.log(successMessage2, index);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("this always executes");
//   });

//consuming a promise with async and await
async function handleRoutine() {
  try {
    const response1 = await ourPromise;
    const response2 = await ourPromise2;
    console.log({ response1, response2 });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("this is in the finally");
  }
}
// handleRoutine();

//************** promise all  ***********/
// Promise.all([ourPromise, ourPromise2])
//   .then((responseToPromiseAll) => {
//     console.log(responseToPromiseAll);
//   })
//   .catch((err) => console.log(err));

//using fetch to get all the rick and  morty chars
async function getAllChars() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    // console.log("here are the response", response);
    console.log(
      "here are the data",
      data.results.map((oneChar) => oneChar.name)
    );
  } catch (error) {
    console.log(error);
  }
}

getAllChars();
