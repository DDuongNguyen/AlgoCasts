function same(arr1, arr2) {
  result = "";
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] !== Math.sqrt(arr2[i]) ? (result = false) : (result = true);
  }
  return result;
}

// arr1 = [1, 2, 3];
// arr2 = [1, 4, 9];
// arr3 = [1, 5, 6];
// arr4 = [1, 4, 9, 10];

// same(arr1, arr3);
