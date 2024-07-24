// Basic Error Handling Script

function executeCode() {
  try {
    console.log("In the try block");
    throw new Error("Something went wrong!");
    console.log("This line will not execute due to  the error above");
  } catch (error) {
    console.log("In the catch block");
    console.log("Error Caught:", error.message);
  } finally {
    console.log("In the finally block");
  }
}

executeCode();

// Custom Error Script
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "CustomError";
    this.errorCode = errorCode;
  }
}

function customErr() {
  try {
    throw new CustomError("Something went wrong!", 1001);
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(`Custom Error: ${error.message} Code: ${error.errorCode}`);
    }
  }
}

customErr();

// Promise Error Handling Script

const randomPromise = new Promise((resolve, reject) => {
  const outcome = Math.random() > 0.5;
  setTimeout(() => {
    if (outcome) {
      resolve("The promise was resolved!");
    } else {
      reject("The promise was rejected!");
    }
  }, 1000);
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

//Fetch Error Handling Script

const url = "https://api.example.com/data";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(`Data Received:`, data);
  })
  .catch((error) => {
    console.error(`There was a problem with the fetch operation: ${error}`);
  });

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`Data Received:`, data);
  } catch (error) {
    console.error(`There was a problem with the fetch operation: ${error}`);
  }
}

fetchData(url);
