function diagonalDifference(arr) {
  // Write your code here
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diag1 += arr[i][i];
    diag2 += arr[i][arr.length - 1 - i];
  }
  let difference = Math.abs(diag1 - diag2);
  return difference;
}
