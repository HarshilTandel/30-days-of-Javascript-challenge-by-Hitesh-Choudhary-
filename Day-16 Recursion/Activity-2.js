//Task-3

function sumArray(arr) {
   
    if (arr.length === 0) {
      return 0;
    }
    
    return arr[0] + sumArray(arr.slice(1));
  }
  
  const testArray = [1, 2, 3, 4, 5];
  const result = sumArray(testArray);
  console.log(`The sum of all elements in the array is: ${result}`);
  
  //Task-4

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
  