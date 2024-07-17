// Even or Odd Function Script
function isEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// Square Calculation Function Script

function square(num) {
  return num * num;
}

console.log(square(7));

// Concatenation Function Script

const concatenate = function (str1, str2) {
  return str1 + str2;
};

console.log(concatenate("Harshil", "Tandel"));

// Sum Calculation Arrow Function Script

const sum = (num1, num2) => num1 + num2;

console.log(sum(7, 18));

// Higher-Order Function Script

const callHigherOrderFunc2 = (func1, func2, value) => {
  const result = func1(value);
  func2(result);
};

const func1 = (value) => {
  return value + 10;
};

const func2 = (func1Value) => {
  console.log("Result after applying both functions:", func1Value);
};

callHigherOrderFunc2(func1, func2, 5);
