//Activity 4: Nested Loops

// task 7: Write a program to print a pattern using nested for loops:
let row = 5

for (let i = 1; i <=row; i++) {
    let stars = ''
    for (let j = 1; j <=i; j++) {
        stars+= "*"
        
    }
    console.log(stars)
}