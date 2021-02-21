function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const valueOfPie = 3.14;

// Export function in nodejs
module.exports.addNumbers = addNumbers;
module.exports.valueOfPie = valueOfPie;
