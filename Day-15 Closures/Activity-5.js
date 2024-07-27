//Task-7

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
    
  //Task-8

  function memoizeFactorial() {
    const cache = {};
  
    return function factorial(n) {
      if (n in cache) {
        return cache[n];
      } else {
        if (n === 0) {
          cache[n] = 1;
        } else {
          cache[n] = n * factorial(n - 1);
        }
        return cache[n];
      }
    };
  }
  
  const factorial = memoizeFactorial();
  console.log(factorial(2));
  console.log(factorial(3));
  console.log(factorial(2));
