// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // char = {}
  //
  // for(i=1; i<=n; i++){
  //   char[i] = i
  // }
  //
  // for(let obj in char){
  //   if (char[obj]%5 === 0 && char[obj]%3===0) {
  //     char[obj]='fizzbuzz'
  //   }
  //   else if (char[obj] % 3 === 0){
  //     char[obj]="fizz"
  //   }
  //   else if (char[obj]%5 === 0) {
  //     char[obj]='buzz'
  //   }
  // }
  // // console.log(Object.values(char)
  //
  // for (let obj in char){
  //   console.log(char[obj]);
  // }

// im so dumb..........
// better way below

for (i=1; i<=n; i++){
  if(i%3===0 && i%5===0){
    console.log('fizzbuzz');
  }
  else if (i%3===0) {
    console.log('fizz');
  }
  else if (i%5 === 0) {
    console.log('buzz');
  }
  else {
    console.log(i);
  }
}




}


module.exports = fizzBuzz;
