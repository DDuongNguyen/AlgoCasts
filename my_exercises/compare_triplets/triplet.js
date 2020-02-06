function compareTriplets(a, b) {
  var alice = 0;
  var bob = 0;
  var arr = [];

  for (let i = 0; i < 4; i++) {
    if (a[i] < b[i]) {
      alice += 1;
    } else if (a[i] === b[i]) {} 
    else {
      bob += 1;
    }
  }
  arr.push(bob);
  arr.push(alice);

  return arr;
}
