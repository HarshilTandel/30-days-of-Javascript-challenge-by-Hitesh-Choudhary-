//Task-5

function reverseString(str) {
    if (str === "") {
      return "";
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
  }
  
  const testString = "hello";
  const result = reverseString(testString);
  console.log(`The reverse of the string "${testString}" is: "${result}"`);
  
//Task-6

function isPalindrome(str) {

    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, -1));
  }

  const testString1 = "racecar";
  const result1 = isPalindrome(testString1);
  console.log(`The string "${testString1}" is${result1 ? "" : " not"} a palindrome.`);
  
  const testString2 = "hello";
  const result2 = isPalindrome(testString2);
  console.log(`The string "${testString2}" is${result2 ? "" : " not"} a palindrome.`);
  