//Template Literals Script

const name = "MS Dhoni";
const age = 43;
const msg = `my name is ${name} and age is ${age}`;
console.log(msg);
//Destructuring Script
const books = {
  author: "30-days js",
  title: "Chai Aur Code",
  year: "2024",
};

const { author, title } = books;

console.log(`The Author of the bookl is ${author} and its title is ${title}`);

//Spread and Rest Operators Script

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
console.log(newArr);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
//Default Parameters Script
function sumOfnum(a, b = 1) {
  return a * b;
}
console.log(sumOfnum(7));
console.log(sumOfnum(7, 18));
//Enhanced Object Literals Script

const name1 = "MS DHONI";
const age1 = 43;
const trophy = 20;

const human = {
  name1,
  age1,
  trophy,
  achievement() {
    console.log(
      `Hello, my name is ${this.name1} and I am ${this.age1} years old and i have ${this.trophy} trophy`
    );
  },
};

console.log(human);
human.achievement();
