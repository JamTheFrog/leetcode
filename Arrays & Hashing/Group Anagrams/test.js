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
var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map);    /* Time O(N * K) | Space O(N * K) */

  return [ ...map.values() ];/* Time O(N)     | Space O(N * K) */
}

var groupWords = (words, map) => {
  for (const original of words) {/* Time O(N) */
      const hash = getHash(original); /* Time O(K) | Space O(1) */
      const values = map.get(hash) || [];

      values.push(original);          /*           | Space O(N) */
      map.set(hash, values);          /*           | Space O(N * K) */
  }
}

const getHash = (word) => {
  const frequency = new Array(26).fill(0);

  for (const char of word) {/* Time O(K) */
      const charCode = getCode(char);/* Time O(1) | Space (1) */

      frequency[charCode]++;         /*           | Space O(1) */
  }

  return buildHash(frequency)
}

const getCode = (char) =>   char.charCodeAt(0) - 'a'.charCodeAt(0);

const buildHash = (frequency) => frequency.toString();

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat"]));
