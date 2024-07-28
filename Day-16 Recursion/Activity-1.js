//Task-1

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const testCases = [0, 1, 2, 5, 10];

testCases.forEach(testCase => {
    console.log(`Factorial of ${testCase} is ${factorial(testCase)}`);
});

//Task-2

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const testCase = 10;
  const result = fibonacci(testCase);
  console.log(`The ${testCase}th Fibonacci number is: ${result}`);
  
