// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max. sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
let maxSum = 0
let tempSum= 0
if (arr.length< num) return null;
// return null if arr length is less than the number length

for (let i = 0; i<num; i++){
  maxSum += arr[i]
}
// max sum is the first N index values,, first window

tempSum = maxSum;
// 2nd window is the first window


// for(let i = num, i< arr.length; i++){
/  // the new window starting from N
  // tempSum = tempSum - arr[i-num] + arr[i];

  // temp sum = the window - the first element and adding the next element


for(let i = 0; i<arr.length;i++){
      tempSum= tempSum - arr[i] + arr[i+num]
  maxSum= Math.max(maxSum,tempSum)
}

return maxSum
}
