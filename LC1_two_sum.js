/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/**
 Steps:
 1. brute force: outter loop start from 0, inner loop start from i+1
 2. check if nums[i] + nums[j] === target, exist then push two indexes into a array
 3. return sum array

 */
//O(n^2), O(1)
var twoSum1 = function(nums, target) {
    let sums = [];

    for(let i = 0; i < nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                sums.push(i, j);
            }
        }
    }
    return sums;
};

/**
 Steps:
 1. hashMap: create a hashmap {} and sum []
 2. loop through each element in a array, check if hashmap exist target - current
 3. if exist then push two indexes into sum
 4. if not, add current into hashmap
 5. return sum array
 */

//O(n), O(n)
var twoSum2 = function(nums, target) {
    let hash = {};
    let sum = [];

    for(let i = 0; i < nums.length; i++) {
        let targertMinusCurr = target - nums[i];
        if (hash[targertMinusCurr.toString()] !== undefined) {
            sum.push(nums.indexOf(targertMinusCurr), i);
        }
        hash[nums[i].toString()] = nums[i];
    }
    return sum;
}


var twoSum = function(nums, target) {


}
