// Task 1

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

bubbleSort([74, 54, 25, 42, 22, 12, 80]);

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

selectionSort([74, 54, 25, 42, 22, 12, 80]);

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== Math.floor(arr.length / 2)) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

let sortedArray = quicksort([74, 54, 25, 42, 22, 12, 80]);

// Task 2

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

linearSearch([64, 34, 25, 12, 22, 11, 90], 25);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log("Binary Search Index:", mid);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log("Target not found");
  return -1;
}

binarySearch([11, 12, 22, 25, 34, 64, 90], 25);

// Task 3

function countCharacterOccurrences(str) {
  let counts = {};
  for (let char of str) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }
  console.log("Character Occurrences:", counts);
}

countCharacterOccurrences("javascript challenge");

function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    if (seen[str[end]] !== undefined && seen[str[end]] >= start) {
      start = seen[str[end]] + 1;
    }
    seen[str[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  console.log(
    "Length of Longest Substring Without Repeating Characters:",
    maxLength
  );
}

longestSubstringWithoutRepeating("abbccdefgh");

// Task 4

function rotateArray(arr, k) {
  k = k % arr.length;
  let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
  console.log("Rotated Array:", rotatedArray);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log("Merged Sorted Array:", mergedArray);
}

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);
