/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

// The below code is the JS function without any UI

function twoSum(inputArray, target) {
    let left = 0;
    let right = inputArray.length - 1;

    while (left < right) {
        const currentSum = inputArray[left] + inputArray[right];

        if (currentSum === target) {
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}


console.log(twoSum([1, 2, 3, 5], 7));
console.log(twoSum([ 4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));


