// ====================================================================================

// Problem:
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase,
// typically using all the original letters exactly once.

// ====================================================================================

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// ====================================================================================

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// ====================================================================================

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let sortedStrs = [];

  // Step 2: Loop through each string in the array
  for (let str of strs) {
    // Get charcode values for each character
    let charcodes = [];
    for (let i = 0; i < str.length; i++) {
      charcodes.push(str.charCodeAt(i));
    }

    // Sort the characters based on their charcode values
    charcodes.sort((a, b) => a - b);

    // Combine the sorted characters back into a string
    let sortedStr = "";
    for (let i = 0; i < charcodes.length; i++) {
      sortedStr += String.fromCharCode(charcodes[i]);
    }

    // Push the sorted string into the array of sorted strings
    sortedStrs.push(sortedStr);
  }

  // Step 3: Sort the array of sorted strings
  sortedStrs.sort();

  return sortedStrs;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "aet"]));
