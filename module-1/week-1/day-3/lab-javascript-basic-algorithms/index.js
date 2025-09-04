// Iteration 1: Names and Input
const hacker1 = "Jashua";
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "Joshua";
console.log("The navigators name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, with ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The Navigators has the longest name, with ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow you have the same length names, with ${hacker1.length} characters`
  );
}
// Iteration 3: Loops
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  const currentLetter = hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    spacedName += currentLetter + "-";
  } else {
    spacedName += currentLetter;
  }
}
console.log(spacedName);
//for loop in reverse
let reversedName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName += hacker1[i];
}
console.log(reversedName);

// lexigraphical
console.log(hacker2.localeCompare(hacker1));
if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else {
  console.log("wow you have the same exact names");
}

//bonus
const palindrome = "T,aco Cat.";
let cleanPhrase = "";
let reversedPhrase = "";
for (let i = palindrome.length - 1; i >= 0; i--) {
  const currentLetter = palindrome[i].toLowerCase();
  if (currentLetter.charCodeAt(0) >= 97 && currentLetter.charCodeAt(0) <= 122) {
    reversedPhrase += currentLetter;
  }
}
for (let i = 0; i < palindrome.length; i++) {
  const currentLetter = palindrome[i].toLowerCase();
  if (currentLetter.charCodeAt(0) >= 97 && currentLetter.charCodeAt(0) <= 122) {
    cleanPhrase += currentLetter.toLowerCase();
  }
}
console.log(palindrome, reversedPhrase, cleanPhrase);
if (reversedPhrase === cleanPhrase) {
  console.log("It is a palindrome!");
} else {
  console.log("Not a Palindrome");
}
