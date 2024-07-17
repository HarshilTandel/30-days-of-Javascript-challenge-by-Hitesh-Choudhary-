// Task 7
const multiply = (a, b = 5) => {
    return a * b;
}

console.log(multiply(2));
console.log(multiply(3, 5));

// Task 8
const greeting = (name, age = 21) => {
    return `Hello ${name}, you are ${age} years old`;
}

console.log(greeting("Harshil"));
