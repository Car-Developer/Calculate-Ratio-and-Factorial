const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(16, 8, 3));
