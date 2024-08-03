const maxArea = (height) => {
    let maxWater = 0, left = 0, right = height.length - 1;
    
    while (left < right) {
      const currentWater = Math.min(height[left], height[right]) * (right - left);
      maxWater = Math.max(maxWater, currentWater);
      
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    
    return maxWater;
  };
  
  // Test cases
  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
  console.log(maxArea([1,1]));               // 1
  console.log(maxArea([4,3,2,1,4]));         // 16