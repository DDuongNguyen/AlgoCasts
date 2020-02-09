function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg += 1;
    } else if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] === 0) {
      zero += 1;
    }
  }
  console.log(Number((pos / arr.length).toFixed(6)));
  console.log(Number((neg / arr.length).toFixed(6)));
  console.log(Number((zero / arr.length).toFixed(6)));
}

function plusMinus2(arr) {
  console.log(
    Number((arr.filter(number => number > 0).length / arr.length).toFixed(6))
  );
  console.log(
    Number((arr.filter(number => number < 0).length / arr.length).toFixed(6))
  );
  console.log(
    Number((arr.filter(number => number === 0).length / arr.length).toFixed(6))
  );
}
