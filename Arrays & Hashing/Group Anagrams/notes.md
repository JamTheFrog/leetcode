====================================================================================

Problem:
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, 
typically using all the original letters exactly once.

====================================================================================

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

====================================================================================

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

====================================================================================

Video link: https://www.youtube.com/watch?v=vzdNOK2oB2E 
Leetcode link: https://leetcode.com/problems/group-anagrams/

====================================================================================

My notes:

There are two ways of solving the problem:

1. The first solution is the simplest one with a O(n*log(n)) solution. 
Both solutions work very similary. The point is to create a hashmap of the sorted 
characters of each string as the key with the value being an array of strings that
are passed as parameters of the function. 
The key steps of the program are the following:
- Initialize the hashmap
- Loop over the array of strings and sort them one by one
- Check if they are in the hashmap
- If not in the hashmap intialize an array as the val to sorterStr key and push str
- If yes just push the string 
-  return the hashmap.values spread into a result array

2. The second solution has an even faster runtime being an O(n) solution. 
The solution is based on the same approach, however the sorting of strings can be
bypassed by creating a frequency array for each unique anagram group 
that will have 26 initialized memory slots.
Each slot will correspond to a letter of the word, so if we have a sorted string of 
"aaade" we will have a frequency array of [3, 0, 0, 1, 1... and another 21 0's].
This frequency array will act as a key in our hashmap instead of the sortedStr we 
used in the first solution, the rest of the approach will stay the same. The point
is that for each str there will be a frequency array generated which will be used
as the key to our hashmap.

====================================================================================