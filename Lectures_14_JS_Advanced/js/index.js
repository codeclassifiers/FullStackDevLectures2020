// Normal function definition
// function sumOfNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }
// const sumOfTwoNumbers = sumOfNumbers(1,2);
// console.log("the sum of numbers is: ",sumOfTwoNumbers);
// Definition using variables
// const sumOfTwoNumbers = function(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }
// console.log(sumOfTwoNumbers);
// console.log("the sum of numbers is: ",sumOfTwoNumbers(3,4));
// Arrow function
// const sumOfTwoNumbers = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber;
// }
// console.log(`the sum of numbers is: ${sumOfTwoNumbers(3,4)}`);
// const areaOfCircle = (radius) => {
//     return 3.14 * radius * radius;
// }
// console.log(`the area of circle is: ${areaOfCircle(3)}`);

// Simple closure

// nested functions
// function areaAndDiameterOfCircle(radius) {
//     const passedRadiusValue = radius;
//     // nested function for area
//     function areaOfCircle() {
//         return 3.14 * radius * radius;
//     }
//     // nested function for diameter
//     function diameterOfCircle() {
//        return 2*radius; 
//     }
//     const area = areaOfCircle();
//     const diameter = diameterOfCircle();
//     console.log("values", area, diameter);
//     const areaDiameterJSON = {
//         "area":area,
//         diameter
//     }
//     console.log("JSON: ", areaDiameterJSON);
//     return areaDiameterJSON;
// }
// const areaAndDiameter = areaAndDiameterOfCircle(3);
// console.dir(areaAndDiameterOfCircle);

//parent function
// function parentFunction(firstNumber, secondNumber) {
//     // nested function
//     function additionOfNumbers() {
//         console.log("Inner function values", firstNumber, secondNumber)
//         return firstNumber + secondNumber;
//     };
//     return additionOfNumbers;
// }

// const sumOfNumberNumbersFunction = parentFunction(1, 2);
// // Function body
// // console.log(sumOfNumberNumbersFunction);
// // Function call
// console.dir(sumOfNumberNumbersFunction);
// console.log(sumOfNumberNumbersFunction());

// function additionByTwo(input) {
//     return input + 2;
// }
// function additionByFour(input) {
//     return input + 4;
// }
// function addtionBySix(input) {
//     return input + 6;
// }
// console.log(additionByTwo(3));
// console.log(additionByFour(3));
// console.log(addtionBySix(3));

function additionByANumber(adderValue) {
    // nested function
    function additionOfNumbers(inputNumber) {
        console.log("adder value", adderValue);
        console.log("input number", inputNumber)
        return inputNumber + adderValue;
    }
    return additionOfNumbers;
}

const additionByTwo = additionByANumber(2);
const additionByFour = additionByANumber(4);
// const additionBySix = additionByANumber(6);
console.log(additionByTwo);
console.dir(additionByTwo);
// console.dir(additionBySix);

console.log(additionByTwo(4));
console.log(additionByTwo(10));
console.log(additionByTwo(13))
// console.log(additionByFour(5));
// console.log(additionBySix(4));