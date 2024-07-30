// Task 1: Bubble Sort

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

  // Task 2: Selection Sort
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

  // Task 3: Quicksort

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
