// Task 4: Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  linearSearch([64, 34, 25, 12, 22, 11, 90], 25);
    
  //Task 5: Binary Search

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
  