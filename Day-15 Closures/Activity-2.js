//Task-3

function idGenerator() {
    let lastId = 0;
  
    return function () {
      lastId++;
      return lastId;
    };
  }
  
  const generateId = idGenerator();
  console.log(generateId());
  console.log(generateId());
  
//Task-4

function greetUser(name) {
    return function () {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetChinmay = greetUser("Chinmay");
  greetChinmay();