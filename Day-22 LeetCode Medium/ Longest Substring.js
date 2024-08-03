function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;
  
    for (let right = 0; right < s.length; right++) {
      if (map.has(s[right])) {
        left = Math.max(map.get(s[right]) + 1, left);
      }
      map.set(s[right], right);
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  
  // Test cases
  console.log(lengthOfLongestSubstring("abkl")); // Output: 4
  console.log(lengthOfLongestSubstring("ccdd")); // Output: 2
  console.log(lengthOfLongestSubstring("qwerty")); // Output: 6
  