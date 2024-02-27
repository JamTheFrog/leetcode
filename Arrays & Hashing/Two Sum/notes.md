====================================================================================
Problem:

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

====================================================================================

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
====================================================================================

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

====================================================================================
 
Follow-up: 

Can you come up with an algorithm that is less than O(n2) time complexity?

====================================================================================

Video link: https://www.youtube.com/watch?v=KLlXCFG5TnA
Leetcode link: https://leetcode.com/problems/two-sum

====================================================================================

My notes:

The trick to this problem is to use the target value to your advantage instead of
only looking for the two values that will add to it.
Mathematically you can select one number from the array and the second number 
you need will be 

target - selectedNum = neededNum

because of

selectedNum + neededNum = target

There are three ways of solving the problem:

1. We can brute-force the problem by itterating for neededNum.
This will have a time complexity of n^2 and space of 1

2. We can use a hash map in which we set the elements of the array equal
to their indicies.
After that we can iterate over the array one element at a time and look up
the neededNum as a key and if it exsists we return [indexWeAreOn, neededNumIndex]
This has a time complexity of n and space of n.

3. We can further simplify the hash map usage by doing only a single pass.
We check if the map has the neededNum and if it doesnt we add the element we are
on to the map and move onto the next one. 
This way once we get to the end of the array we have checked for every combination
possible with just one pass.
This has a time complexity of n and space of n. However, its faster than the 2 pass.
====================================================================================