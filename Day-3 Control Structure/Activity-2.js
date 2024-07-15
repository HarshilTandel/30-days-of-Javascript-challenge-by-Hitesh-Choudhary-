function largestNum(num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            console.log(`${num1} is the Largest`);
        } else {
            console.log(`${num3} is the Largest`);
        }
    } else {
        if (num2 >= num3) {
            console.log(`${num2} is the Largest`);
        } else {
            console.log(`${num3} is the Largest`);
        }
    }
}
largestNum(1,2,3);
largestNum(44,55,566);
largestNum(0,0,0);