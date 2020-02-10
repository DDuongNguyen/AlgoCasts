function sockMerchant(n, ar) {
  let map = {};
  let pairs = 0;
  for (let sock of ar) {
    map[sock] = map[sock] + 1 || 1;
  }
  for (let sock in map) {
    map[sock] = Math.floor(map[sock] / 2);
    pairs += map[sock];
  }

  return pairs;
}
