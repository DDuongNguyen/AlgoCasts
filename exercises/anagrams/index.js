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
  if (stringA === stringB) {
    return true;
  }

  var charmap1 = {};
  var charmap2 = {};

  for (let letter of stringA) {
    charmap1[letter] = charmap1[letter] + 1 || 1;
  }
  for (let letter of stringB) {
    charmap2[letter] = charmap2[letter] + 1 || 1;
  }
  if (Object.keys(charmap1).length !== Object.keys(charmap2).length) {
    return false;
  } else {
    for (let key in charmap1) {
      if (charmap1[key] !== charmap2[key]) {
        false;
      }
      return true;
    }
  }
}

module.exports = anagrams;

// compare 2 sorted array to see if they are anagrams

function sortAnagram(stringA, StringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
