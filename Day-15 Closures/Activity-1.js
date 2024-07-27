//Task-1

function outerFunction() {
  let outerVariable = "Outer Function is Here";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner()

//Task-2

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