// Task-1

function throwError(user) {
    try {
      if (!user) {
        throw new Error("User name is missing");
      }
      if (!user.age || user.age < 18) {
        throw new Error("User must be at least 18 years old");
      }
      console.log("User data processed successfully");
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  }
  
  const user1 = {
    name: "Megh",
    age: 25,
  };
  // throwError(user1);
  
  const user2 = {
    name: "Nobody",
    age: 0,
  };
  throwError(user2)
  
  //Task-2

  function divideTwoNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
  
      let result = a / b;
  
      if (result === 0) {
        throw new Error("Result is zero");
      }
  
      console.log(result);
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  }
  

  divideTwoNumbers(2, 3); 
  divideTwoNumbers(0, 3); 
  divideTwoNumbers(2, 0); 
  