// Task 8

let book = { title: "M.S.DHONI", author: "Unknown", year: 2018 };

for (let property in book) {
  console.log(`${property}: ${book[property]}`);
}

// Task 9

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
