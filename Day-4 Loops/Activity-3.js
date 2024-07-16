//Activity 3: Do...While Loop

// task 5: Write a program to print numbers from 1 to 5 using a do... while loop.

let i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);

// task 6: Write a program to calculate the factorial of a number using a do...while loop.

let num = 7
fact = 1

do {
    fact *= num
    num--
} while (num>0);
console.log(`The Factorial of 5 is ${fact}`)