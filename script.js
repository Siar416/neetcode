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
// console.log(containsDuplicate([1, 2, 3, 1]));

////////////////////////////////////////////////////////////////////////////////////////////

// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
    }
  }

  for (const letter in map) {
    if (map[letter] > 0) {
      return false;
    }
  }

  return true;
};
// console.log(isAnagram("anagram", "nagaram"));

////////////////////////////////////////////////////////////////////////////////////////////

// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (map[compliment] !== undefined) {
      return [i, map[compliment]];
    } else {
      map[nums[i]] = i;
    }
  }
};
// console.log(twoSum([3, 3], 6));

////////////////////////////////////////////////////////////////////////////////////////////

// Group Anagrams

// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
  let map = {};

  const sortedArray = strs.map((str) => str.split("").sort().join(""));

  for (let i = 0; i < sortedArray.length; i++) {
    if (!map[sortedArray[i]]) {
      map[sortedArray[i]] = [strs[i]];
    } else {
      map[sortedArray[i]].push(strs[i]);
    }
  }

  return Object.values(map);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
