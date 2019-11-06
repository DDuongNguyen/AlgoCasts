// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
let words = (str.split(' '))
// console.log(words)
sentence = []
for(word of words){
  let rest= word.slice(1)
  let first= word[0].toUpperCase()
  console.log(word[0].concat(word[1]))
  sentence.push(first.concat(rest))
}
  return (sentence.join(' '));
}

module.exports = capitalize;
