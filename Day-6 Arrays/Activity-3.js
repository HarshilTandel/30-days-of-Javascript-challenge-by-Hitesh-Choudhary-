//Task-7

let double =  [7,18,45];
let finalarr=double.map(elm => {
  return  elm*elm;
})

console.log(finalarr);

//Task-8

let arr = [3, 6, 11, 14, 15,28];
let even = arr.filter(elm => {
    return (elm % 2==0)
})
console.log(even);

//Task-9

let arr2 = [1,2,3,4,5,6,7,8,9];
let sum = arr2.reduce((num1,num2)=> {
    return num1 + num2
})
console.log(sum);