//Task-8

const name = "MS DHONI";
const age = 43;
const trophy =20;

const human = {
  name,
  age,
  trophy,
  achievement() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old and i have ${this.trophy} trophy`
    );
  },
};

console.log(human);
human.achievement();

//Task-9

const key = "TrophyCollector";
const value = "MS DHONI";

const obj = {
  [key]: value,
};

console.log(obj);
