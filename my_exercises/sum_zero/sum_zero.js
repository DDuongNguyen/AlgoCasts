function sumZero(arr){
    let left = 0
    let right = arr.length-1
    while (left<right){
        if(arr[left]+ arr[right]===0){
            return [arr[left],arr[right]]
        }
        else if(arr[left]+arr[right]>0){
            right--
        }else{left++}
    }
}

// NAIVE WAY O(N)^2
function sumZeroNaive(arr) {
  let pair = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let l = arr.length - 1; l > 0; l--) {
      if (arr[i] + arr[l] === 0) {
        pair.push(arr[i]);
        pair.push(arr[l]);
        return pair;
      }
    }
  }
}

// arr = [-3, -2, -1, 0, 1, 2, 3];
// arr2 = [-2, -1, 0, 2, 5, 7];
// arr3 = [1, 2, 3];

// sumZero(arr);
