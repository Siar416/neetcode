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
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

////////////////////////////////////////////////////////////////////////////////////////////

// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most
// frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

  let result = [];

  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
};
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

////////////////////////////////////////////////////////////////////////////////////////////

// Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// when nums of i is 0 then we'll do 2*3*4 = 24
// then when nums of i is 1 we'll do 1*3*4 = 12
// etc.

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const productExceptSelf = (nums) => {
  let forwardArray = [];
  let start = 1;

  for (let i = 0; i < nums.length; i++) {
    forwardArray.push(start);
    start = start * nums[i];
  }

  let reverseArray = [];
  let startTwo = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    reverseArray.unshift(startTwo * forwardArray[i]);
    startTwo = startTwo * nums[i];
  }

  return reverseArray;
};
// console.log(productExceptSelf([1, 2, 3, 4]));

////////////////////////////////////////////////////////////////////////////////////////////

// Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const isValidSudoku = (board) => {
  let row = {};
  let col = {};
  let box = {};

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let value = board[row][col];
      if (value !== ".") {
        let boxIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        if (
          row[`${row}-${value}`] ||
          col[`${col}-${value}`] ||
          box[`${boxIdx}-${value}`]
        ) {
          return false;
        }
        row[`${row}-${value}`] = true;
        col[`${col}-${value}`] = true;
        box[`${boxIdx}-${value}`] = true;
      }
    }
  }

  return true;
};
// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

////////////////////////////////////////////////////////////////////////////////////////////

// Longest Consecutive Sequence

// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements
// sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

const longestConsecutive = (nums) => {
  let numMap = {};
  let longest = 0;

  for (const num of nums) {
    numMap[num] = true;
  }

  for (const num of nums) {
    if (!numMap[num - 1]) {
      let length = 0;
      while (numMap[num + length]) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

////////////////////////////////////////////////////////////////////////////////////////////

// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const threeSum = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const threeSum = a + nums[left] + nums[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        result.push([a, nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return result;
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

////////////////////////////////////////////////////////////////////////////////////////////

// Challenge
// Can you modify your previous Insertion Sort implementation to keep track of the number of shifts it makes while sorting?
// The only thing you should print is the number of shifts made by the algorithm to completely sort the array.
// A shift occurs when an element's position changes in the array. Do not shift an element if it is not necessary.

// input
// 2 1 3 1 2

// output
// 4

function runningTime(arr) {
  let shifts = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let prevNum = i - 1;

    while (prevNum >= 0 && arr[prevNum] > currentNum) {
      arr[prevNum + 1] = arr[prevNum];
      shifts++;
      prevNum--;
    }
    arr[prevNum + 1] = currentNum;
  }
  return shifts;
}
// console.log(runningTime([2, 1, 3, 1, 2]));

////////////////////////////////////////////////////////////////////////////////////////////

// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.

// input:
// 73
// 67
// 38
// 33

// output
// 75
// 67
// 40
// 33

function gradingStudents(grades) {
  let resultGrades = [];
  let gradeRounded = 0;

  for (let i = 0; i < grades.length; i++) {
    gradeRounded = Math.ceil(grades[i] / 5) * 5;
    if (gradeRounded - grades[i] < 3 && grades[i] >= 38) {
      resultGrades.push(gradeRounded);
    } else {
      resultGrades.push(grades[i]);
    }
  }
  return resultGrades;
}
// console.log(gradingStudents([73, 67, 38, 33]));

////////////////////////////////////////////////////////////////////////////////////////////

// HackerRank Apple and Oranges problem

// Complete the countApplesAndOranges function in the editor below.
// It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// Sample input:
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6

// Sample output
// 1
// 1

// * The function accepts following parameters:
// *  1. INTEGER s
// *  2. INTEGER t
// *  3. INTEGER a
// *  4. INTEGER b
// *  5. INTEGER_ARRAY apples
// *  6. INTEGER_ARRAY oranges

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleResult = 0;
  let orangeResult = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleResult++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orangeResult++;
    }
  }
  console.log(`${appleResult}\n${orangeResult}`);
}
// console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));

////////////////////////////////////////////////////////////////////////////////////////////

// Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns

// string: either YES or NO

// Input Format

// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2) return "YES";

  if (x1 !== x2 && v1 === v2) return "NO";

  const time = (x2 - x1) / (v1 - v2);

  if (time >= 0 && Number.isInteger(time)) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(kangaroo(0, 2, 5, 3));
