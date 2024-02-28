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

1. The first and slower approach is to solve the problem with a frequency list.
We itterate through the array and push the elements into a frequency list. 
After this we itterate through the keys of the frequency list and order it into an
array of tuples where the structure is the following 
[[element, number of occurances], ...]
This approach has a time complexity of O(nlog(n)) due to the extra sorting

2. The second and better approach with a time complexity of O(n) is
to create an extra array immediately that is innitiated to the size of the array we 
have been passed + 1, why + 1, because we need a case where the number of occurrences 
of the elements is 0 despite that index never being used. 
Futhermore, we will use the indexes of the array as the counters of the frequency of
elements in our original array. This is a good approach because we dont need to 
compare the count of elements to the count of other elements in order to sort them.
After creating the same frequency list we made in the first approach we just access
the result array by using the value of the frequency enteries as the array index,
then just pushing on the values into the subarray situated at that index. After this
we reverse the array so our highest values come as the first indexes when 
the our sorted array is being itterated over. We itterate and reduce k for every time
we push an elements into the result array.

====================================================================================