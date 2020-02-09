function staircase(n) {
  let symbol = "#";
  for (let i = 1; i <= n; i++) {
    console.log(symbol.repeat(i).padStart(n));
  }
}
