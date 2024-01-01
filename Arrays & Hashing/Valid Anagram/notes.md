====================================================================================

Problem:

Given two strings s and t, return true if t is an anagram of s, 
and false otherwise.
An Anagram is a word or phrase formed by 
rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

====================================================================================

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
 
====================================================================================

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
====================================================================================

Follow up: 

What if the inputs contain Unicode characters? 
How would you adapt your solution to such a case?

====================================================================================

Video link: https://www.youtube.com/watch?v=9UtInBqnCgA

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