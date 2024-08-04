function trap(height) {
    let left = 0,
      right = height.length - 1;
    let leftMax = 0,
      rightMax = 0;
    let water = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          water += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          water += rightMax - height[right];
        }
        right--;
      }
    }
  
    return water;
  }
  
  console.log(trap([0, 3, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 12
  console.log(trap([4, 2, 0, 3, 4, 5])); // 7