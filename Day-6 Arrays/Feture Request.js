// Featred Request

let WC = ["Rohit", "Virat", "Pant"];
console.log(WC);
WC.push("MS");
console.log(WC);

WC.pop();
console.log(WC);

WC.shift();
console.log(WC);

WC.unshift("Rohit");
console.log(WC);

// Use filter method, even number

let double = [7, 18, 45];
let finalarr = double.map((elm) => {
  return elm * elm;
});

console.log(finalarr);

let arr = [3, 6, 11, 14, 15, 28];
let even = arr.filter((elm) => {
  return elm % 2 == 0;
});
console.log(even);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr2.reduce((num1, num2) => {
  return num1 + num2;
});
console.log(sum);

//Itrate using for each loop
let cricket = ["Dhoni", 7, "CSK"];
for (let i = 0; i < cricket.length; i++) {
  console.log(cricket[i]);
}

let cricket1 = ["CSK", 5, "Fan"];
cricket1.forEach((element) => {
  console.log(element);
});

//Access specific element in 2d array.

let twod = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10],
];
console.log(twod);

console.log(twod[0][3]);
