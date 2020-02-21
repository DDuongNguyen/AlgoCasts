function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  sar1 = arr1.sort();
  sar2 = arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (sar1[i] !== Math.sqrt(sarr2[i])) {
      return false;
    } else {
      return true;
    }
  }
}


function buildMap(arr) {
  map = {};
  for (item of arr) {
    map[item] = map[item] + 1 || 1;
  }
  return map;
}

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  map1 = buildMap(arr1);
  map2 = buildMap(arr2);
  console.log(map1);
  console.log(map2);

  for (let number in map1) {
    if (map2[number] !== Math.pow(number, 2)) {
      console.log(map2[number], number);
      return false;
    } else {
      return true;
    }
  }
}
// arr1 = [1, 2, 3];
// arr2 = [1, 4, 9];
// arr3 = [1, 5, 6];
// arr4 = [1, 4, 9, 10];

// same(arr1, arr3);
