//CONST VS LET

let name = "John";
let test;

name = "Jack";

const personExample = {
  name: "John",
  age: 33
};

personExample.name = "Jack";
console.log(personExample);

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ARROW FUNCTIONS

// example of a function saying hello

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

//example of the same function with fat arrow notation

const sayHello = name => console.log(`Hello ${name}`);
sayHello("Robbie");

//FOREACH

const fruits = ["Apples", "Oranges", "Grapes"];

fruits.forEach((fruit, index) => console.log(fruit));

//MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
console.log(singleFruit);

//FILTER

const people = [
  { id: 1, name: "Persey" },
  { id: 2, name: "Rabbit" },
  { id: 3, name: "Pepi" }
];

//lets move Pepi out of the array with filter

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

//SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

const person1 = {
  name: "Robbie",
  age: 30
};

const person2 = {
  ...person1,
  email: "robbie@gmail.com"
};

console.log(person2);

//DESTRUCTURING

//CLASSES

//SUBCLASSES

//MODULES
