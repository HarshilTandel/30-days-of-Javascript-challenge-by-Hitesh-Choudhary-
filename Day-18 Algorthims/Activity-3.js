// Task 6: Count Character Occurrences

function countCharacterOccurrences(str) {
    let counts = {};
    for (let char of str) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    console.log("Character Occurrences:", counts);
  }
  
  countCharacterOccurrences("javascript challenge");
  
  //Task 7: Longest Substring Without Repeating Characters

  function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let start = 0;
    let seen = {};
  
    for (let end = 0; end < str.length; end++) {
      if (seen[str[end]] !== undefined && seen[str[end]] >= start) {
        start = seen[str[end]] + 1;
      }
      seen[str[end]] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    console.log(
      "Length of Longest Substring Without Repeating Characters:",
      maxLength
    );
  }
  
  longestSubstringWithoutRepeating("abbccdefgh");
  