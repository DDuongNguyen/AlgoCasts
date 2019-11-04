// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
 const charMap1= {}
 const strA= stringA.replace(/[^\w]/g,'').toLowerCase()
 const charMap2= {}
 const strB= stringB.replace(/[^\w]/g,'').toLowerCase()
 for (let letter of  strA){
   letter.toLowerCase()
   // console.log(letter);
   charMap1[letter]= charMap1[letter]+1 || 1
 }
 for (let letter of  strB){
   letter.toLowerCase()
   // console.log(letter);
   charMap2[letter]= charMap2[letter]+1 || 1
 }
// check for equivalent

var stringAProps = Object.keys(charMap1)
var stringBProps = Object.keys(charMap2)

if(stringAProps.length !== stringBProps.length){
  return false
}

for(let key in stringAProps){
  var propName= stringAProps[key]
  if (charMap1[propName]!==charMap2[propName]){
    return false
  }

  return true
}


// console.log(charMap1);
// console.log('memeow');
// console.log(charMap2);
}

module.exports = anagrams;
