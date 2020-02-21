// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
let caps = []
let arr = str.split(' ')
for (word of arr){
  caps.push(word[0].toUpperCase()+word.slice(1))
}
return caps.join(' ')
}


  // 1 way to do it
  // let words =[]
  // for(let word of str.split(' ')){
  //   words.push(word[0].toUpperCase()+word.slice(1))
  // }
  // return words.join(' ')


module.exports = capitalize;





// refactor this by combining of str.split and the mess inside the loop

// let words = (str.split(' '))
// sentence = []
// for(word of words){
//   let rest= word.slice(1)
//   let first= word[0].toUpperCase()
//   // console.log(word[0].concat(word.slice(1)))
//   sentence.push(first.concat(rest))
// }
// return (sentence.join(' '));
