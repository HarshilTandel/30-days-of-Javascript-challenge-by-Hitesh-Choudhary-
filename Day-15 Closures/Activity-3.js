//Task-5

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
  