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
console.log(isAnagram("anagram", "nagaram"));
