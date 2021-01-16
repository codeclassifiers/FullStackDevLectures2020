// includes method
let fruitsArray = ["apples", "oranges", "bananas", "watermelon", "pears", "guavas"];
let vegetablesArray = ["spinach","tomatoes","carrots"];
console.log(fruitsArray.pull());
// console.log(fruitsArray.includes("bananas"));
// console.log(fruitsArray[0]);
// Array iterations
// for(let index in fruitsArray) {
//     const outputString = `The element at index ${index} is ${fruitsArray[index]}`;
//     console.log(outputString);
// }

// for(let fruit of fruitsArray) {
//     const outputString = `The current element is ${fruit}`;
//     console.log(outputString);
// }

// for(let index = 1; index < 3; index++) {
//     const outputString = `The element at index ${index} is ${fruitsArray[index]}`;
//     console.log(outputString);
// }

// function printAllElementsOfArray(inputArray) {
//     for(let input of inputArray) {
//         const outputString = `The current element is ${input}`;
//         console.log(outputString);
//     }
// }

// Map function
// nameofTheArray.map(function(){})
fruitsArray.map(function(fruit, index){
    const outputString = `The index of ${fruit} is ${index}`;
    console.log(outputString);
});

// Alternate function declaration
// function printAllElementsOfArray(inputArray) {
//     console.log("Values in array are");
//     for(let index in inputArray) {
//         const outputString = `The element at index ${index} is ${inputArray[index]}`;
//         console.log(outputString);
//     }
// }

// printAllElementsOfArray(fruitsArray);
// printAllElementsOfArray(vegetablesArray);

// Accessing element in JSONs with arrays


// Dom manipulation using Javascript

function personDetails() {
    let name = "Dave";
    let age = 35;
}

let personObject = {
    name: "Dave",
    age: 35
}

