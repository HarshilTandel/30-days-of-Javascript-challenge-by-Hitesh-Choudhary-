//Task-5

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
console.log(newArr);

//Task-6

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); 