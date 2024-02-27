====================================================================================

Problem:
Given an integer array nums, 
return true if any value appears at least twice in the array,
and return false if every element is distinct.

====================================================================================
Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
====================================================================================

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109

====================================================================================

Video link: https://www.youtube.com/watch?v=3OamzN90kPg&t=385s
Leetcode link: https://leetcode.com/problems/contains-duplicate/description/

====================================================================================

My notes:

There are three ways of solving the problem:

1. Sort the array and itterate comapring neighbouring values 
until they are equal, if they are equal return true. 
This gives a time complexity of nlogn and space of 1.

2. If we sacrafice some space we can achieve a time complexity of n. 
We use a hash set. We itterate over the array, checking if the element
is in the hashset, if it isnt we add it and if it is we return true
This gives a time complexity of n and space of n.

3. The best solution is to create a set from the array 
and see if the set length is equal to the array length.
This gives a time complexity of 1 and space of n

====================================================================================