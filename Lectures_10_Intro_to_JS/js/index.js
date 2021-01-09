// Primitive Data Types
// let name = "Dave";
// let age = 35;
// let profession = 'programming';

// Objects
// let personObject = {
//     name: "Dave",
//     age: 25,
//     profession:"programming",
//     lastName: "Johnson"
// }

// Dot notation
// console.log(personObject.lastName);

// square bracker notation
// console.log(personObject["lastName"]);

// Arrays
let fruits = ["apples", "oranges", "pears","watermelon", "gauavas"];

// console.log(fruits);

// using index
// fruits[4] = "watermelon";
// console.log(fruits);

// using built in method
// fruits.pop();
// console.log(fruits);

// slice method
// let partOfFruits = fruits.slice(1,4);
// console.log(partOfFruits);

// function
// function squareOfNumber(number) {
//     const square = number * number;
//     console.log("The square of",number,"is", square);
//     console.log("Thank you for using this function for printing square of", number)
// }

// squareOfNumber(3);

// function printOrderStatus(isShirtAvailableInput) {
//     if(isShirtAvailableInput) {
//         console.log("shirt is available");
//     } else {
//         console.log("We will send your order soon");
//     }  
// }

// let isShirtAvailable = null;
// printOrderStatus(isShirtAvailable);

// isShirtAvailable = "Polo shirt";
// printOrderStatus(isShirtAvailable);
// const pi = 3.14;

// function areaOfCircle(valueOfPi, valueOfRadius) {
//     const area = valueOfPi * valueOfRadius * valueOfRadius;
//     console.log('Area of circle', area);
// }

// areaOfCircle(pi, 3);
// areaOfCircle(pi, 5);

// let name = "Dave Johnson";
// let name2 = "Joe Cartwright";
// let name3 = "Sandy Depp";

// console.log(name.includes("Johnson"));
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());


let name = "Dave Johnson";
let profession = "engineer";
let age = 30;

// + sign
let completeString = name + " is an " + profession + " who is " + age + " years old.";
console.log(completeString);

// ``
let newCompleteString = `${name} is an ${profession} who is ${age} years old.`;
console.log(newCompleteString);




