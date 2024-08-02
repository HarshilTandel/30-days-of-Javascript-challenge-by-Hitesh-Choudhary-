function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split("").reverse().join("");
  }
  
  // Test cases
  console.log(isPalindrome(121)); // Output: true
  console.log(isPalindrome(-121)); // Output: false
  console.log(isPalindrome(10)); // Output: false
  console.log(isPalindrome(0)); // Output: true
  