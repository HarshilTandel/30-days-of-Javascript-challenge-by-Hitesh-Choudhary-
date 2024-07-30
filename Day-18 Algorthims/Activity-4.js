// Task 8: Rotate Array by k Positions

function rotateArray(arr, k) {
    k = k % arr.length;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotatedArray);
  }
  
  rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
   
  //Task 9: Merge Two Sorted Arrays

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
  