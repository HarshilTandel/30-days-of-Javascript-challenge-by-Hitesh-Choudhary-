class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello I am ${this.name} and I'm ${this.age} years old`;
  }

  updatedAge(newAge) {
    this.age = newAge;
    console.log(`New Age: ${this.age}`);
  }
}

const me = new Person("Harshil", 20);
console.log(me.greet());

me.updatedAge(21);
console.log(me.greet());

class Person {
  constructor(name) {
    this.name = name;
  }

  static greet() {
    return `Namaste from the Person`;
  }
}

console.log(Person.greet());

class Student extends Person {
  static studentCount = 0;
  constructor(name, studentID) {
    super(name);
    this.studentID = studentID;

    Student.studentCount++;
  }

  getStudentId() {
    return `Student ID:${this.studentID}`;
  }
}

const student1 = new Student("Harshil", 101);
const student2 = new Student("Harshilht", 102);
const student3 = new Student("Harshilhjt", 103);

console.log(Student.studentCount);

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullName(name) {
    const [firstname, lastname] = name.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const myName = new Person("HArshil", "OP");
console.log(myName.fullName);

class Account {
  #balance;
  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("Deposite amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("Insufficient Funds!");
      }
    } else {
      console.log("Withdrawal amount must be positive");
    }
  }
  getbalance() {
    return this.#balance;
  }
}

const myAccount = new Account(1000);
myAccount.deposit(100);
myAccount.withdraw(500);
console.log(`Balance: ${myAccount.getbalance()}`);

const newAccount = new Account(2000);
console.log(`Initial Balance: ${newAccount.getbalance()}`);

newAccount.deposit(1000);
console.log(`Balance after depositing 1000: ${newAccount.getbalance()}`);

newAccount.withdraw(2500);
console.log(`Balance after withdrawing 2500: ${newAccount.getbalance()}`);

console.log(`Current Balance: ${newAccount.getbalance()}`);
