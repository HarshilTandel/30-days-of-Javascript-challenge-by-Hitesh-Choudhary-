//Task-8

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
  const result = binarySearch(sortedArray, targetElement);
  console.log(`The index of the target element ${targetElement} is: ${result}`);
  
  //Task-8
  
  function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) {
      return 0;
    }
    const count = arr[index] === target ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1);
  }
  
  const array = [1, 2, 3, 4, 5, 3, 3, 7, 8, 3];
  const targetElement1 = 3;
  const result1 = countOccurrences(array, targetElement1);
  console.log(`The target element ${targetElement1} occurs ${result1} times in the array.`);
  

