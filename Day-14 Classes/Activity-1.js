 // Task 1

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
  
  // Task 2
  
  me.updatedAge(21);
  console.log(me.greet());