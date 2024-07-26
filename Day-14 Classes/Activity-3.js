// Task 5

class Person {
    constructor(name) {
      this.name = name;
    }
  
    static greet() {
      return `Namaste from the Person`;
    }
  }
  
  console.log(Person.greet());
  
  // Taks 6
  
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