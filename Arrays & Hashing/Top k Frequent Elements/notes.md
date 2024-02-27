====================================================================================

Problem:
Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, 
typically using all the original letters exactly once.

====================================================================================

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

====================================================================================

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

====================================================================================

Video link: https://www.youtube.com/watch?v=vzdNOK2oB2E
Leetcode link: https://leetcode.com/problems/top-k-frequent-elements

====================================================================================

My notes:

There are two ways of solving the problem:

1. If we take both strings, sort them with localeCompare we can compare them.
If they are equal then the strings are anagrams of each other and we return true.
Else false.
This has a time complexity of n and space of log n if we use quick sort.

2. If we use a hash map we can map each character in first string 
setting it as a key and giving it a count value of how many same chars there are.
After this we subtract from this count value while itterating over the second str.
If the value of one key is <0 then we return false.
This has a time complexity of n and space of 1.

Remember to first check if the length of the two strings is equal.
They cannot be anagrams if the length of one is different from the other.

====================================================================================