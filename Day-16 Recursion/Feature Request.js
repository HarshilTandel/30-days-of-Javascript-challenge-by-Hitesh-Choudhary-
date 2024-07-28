//Task-1

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const testCases = [0, 1, 2, 5, 10];

testCases.forEach((testCase) => {
  console.log(`Factorial of ${testCase} is ${factorial(testCase)}`);
});

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const testCase = 10;
const result = fibonacci(testCase);
console.log(`The ${testCase}th Fibonacci number is: ${result}`);

//Task-2

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

const testArray = [1, 2, 3, 4, 5];
const result2 = sumArray(testArray);
console.log(`The sum of all elements in the array is: ${result2}`);

function maxElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const maxOfRest = maxElement(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

const testArray1 = [1, 2, 3, 4, 5];
const result1 = maxElement(testArray1);
console.log(`The maximum element in the array is: ${result1}`);

//Task-3

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}

const testString = "hello";
const result3 = reverseString(testString);
console.log(`The reverse of the string "${testString}" is: "${result3}"`);

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

const testString1 = "racecar";
const result4 = isPalindrome(testString1);
console.log(
  `The string "${testString1}" is${result4 ? "" : " not"} a palindrome.`
);

const testString2 = "hello";
const result5 = isPalindrome(testString2);
console.log(
  `The string "${testString2}" is${result5 ? "" : " not"} a palindrome.`
);

//Task-4

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 5;
const result6 = binarySearch(sortedArray, targetElement);
console.log(`The index of the target element ${targetElement} is: ${result6}`);

function countOccurrences(arr, target, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  const count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
}

const array = [1, 2, 3, 4, 5, 3, 3, 7, 8, 3];
const targetElement1 = 3;
const result7 = countOccurrences(array, targetElement1);
console.log(
  `The target element ${targetElement1} occurs ${result7} times in the array.`
);
