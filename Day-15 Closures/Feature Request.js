//Basic Closure Scrpit
function outerFunction() {
    let outerVariable = "Outer Function is Here";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const inner = outerFunction();
  inner()  

//Counter Closure Scripit
function createCounter() {
    let counter = 0;
  
    return {
      increment: function () {
        counter++;
      },
      getValue: function () {
        return counter;
      },
    };
  }
  
  const myCounter = createCounter();
  myCounter.increment();
  myCounter.increment();
  console.log(myCounter.getValue());
//Unique ID Genrator Script
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

//Loop Closure Script


function createFunctions() {
    let functions = [];
  
    for (let i = 0; i < 7; i++) {
      functions.push(
        (function (index) {
          return function () {
            console.log(index);
          };
        })(i)
      );
    }
  
    return functions;
  }
  
  const functionsArray = createFunctions();
  functionsArray[0]();
  functionsArray[1]();
  functionsArray[2]();
  functionsArray[3]();
  functionsArray[4]();
  functionsArray[5]();
  functionsArray[6]();
  

//Memoriazation Script

function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  const add = (a, b) => a + b;
  const memoizedAdd = memoize(add);
  console.log(memoizedAdd(1, 2));
  console.log(memoizedAdd(1, 2));