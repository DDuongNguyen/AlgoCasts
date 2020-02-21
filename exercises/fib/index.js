// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

  fib = [0, 1];
  index = 0;
  nextFib = 0;

  while (index < n) {
    for (let i = index; i < index + 2; i++) {
      nextFib += fib[i];
    }
    fib.push(nextFib);
    index += 1;
    nextFib = 0;
  }

  return fib[n];
}

// need an O(N) method

module.exports = fib;
