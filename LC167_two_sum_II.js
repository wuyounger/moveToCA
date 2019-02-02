/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


/**
 Steps:
 1. Use binarySearch to find target number since array is sorted.
 2. loop through each numer in array, check if target - numbers[i] exist
 3. if number exist then push two indexes into a array
 4. return a array with two indexes

 */

//O(nlogn), O(1)
var twoSum = function(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {

        let j = binarySearch(numbers, target - numbers[i], i + 1);

        if ( l !== -1) {
            return new Array([i + 1, j + 1]);
        }
    }

    throw new Error ('Two sum not found');

};

var binarySearch = function(nums,target, start) {
    let l = 0;
    let r = nums.length - 1;
    let m = (l + r) / 2;

    while (l < r) {
        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m
        }
    }
    return (l === r && nums[l] === target) ? l : -1;
}



