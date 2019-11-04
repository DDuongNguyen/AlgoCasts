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
  // this is ok but we could make a function for it
 // const charMap1= {}
 // const charMap2= {}
 // const strA= stringA.replace(/[^\w]/g,'').toLowerCase()
 // const strB= stringB.replace(/[^\w]/g,'').toLowerCase()
 // for (let letter of  strA){
 //   letter.toLowerCase()
 //   charMap1[letter]= charMap1[letter]+1 || 1
 // }
 // for (let letter of  strB){
 //   letter.toLowerCase()
 //   charMap2[letter]= charMap2[letter]+1 || 1
 // }
// check for equivalent

const charMap1= buildCharMap(stringA)
const charMap2= buildCharMap(stringB)

var stringAProps = Object.keys(charMap1)
var stringBProps = Object.keys(charMap2)

// if(stringAProps.length !== stringBProps.length){
// Basically can just use object key directly instead of assigning it to a variable which consumes more space
if(Object.keys(charMap1).length !== Object.keys(charMap2).length){
  return false
}

for(let key in stringAProps){
  var propName= stringAProps[key]
  if (charMap1[propName]!==charMap2[propName]){
    return false
  }

  return true
}
}

function buildCharMap(str){
  charMap= {}
  for(let element of str.replace(/[^\w]/g,'').toLowerCase()){
    charMap[element] = charMap[element]+1 || 1
  }
  return charMap
}

module.exports = anagrams;


// compare 2 sorted array to see if they are anagrams
function sortAnagram(stringA,StringB){
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}
