// Contains Duplicate

// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = (nums) => {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numMap[nums[i]]) {
      numMap[nums[i]] = 1;
    } else {
      numMap[nums[i]]++;
    }
  }

  for (let num in numMap) {
    if (numMap[num] > 1) {
      return true;
    }
  }

  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
