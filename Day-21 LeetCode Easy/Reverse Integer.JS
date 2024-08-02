function reverseInteger(x) {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if (reversed > 2 ** 31 - 1) return 0;
    return isNegative ? -reversed : reversed;
  }
  
  // Test cases
  console.log(reverseInteger(123)); // Output: 321
  console.log(reverseInteger(-456)); // Output: -654
  console.log(reverseInteger(130)); // Output: 31
  console.log(reverseInteger(0)); // Output: 0
  