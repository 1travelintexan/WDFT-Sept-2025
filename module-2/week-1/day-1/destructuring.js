const dog = {
  name: "Ragnar",
  age: 4,
  breed: "Pitbull",
  owner: "Joshua",
  isAdmin: true,
  toys: ["ball", "bone", "treat"],
  address: {
    street: "123 french way",
    country: "France",
  },
};
const cat = {
  name: "Sam",
  age: 7,
  breed: "british shorthair",
  owner: "Claire",
};
//destructor
const { name, age, toys, address, ...pizza } = dog;
// const {name} = cat
// console.log(name, age, toys, address);
// console.log("the rest:", pizza);

//destructuring arrays
const arrayOfStudents = [
  "Emidio",
  "Fabian",
  "Vera",
  "Kelechi",
  "Pau",
  "Claire",
  "Yanqing",
];
const [student1, _, student2, ...restOfStudents] = arrayOfStudents;
console.log(student1, student2);
console.log("rest of students:", restOfStudents);
