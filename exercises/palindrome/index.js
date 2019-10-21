// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
// let reversed = str.split('').reverse().join('')
// return str === reversed
// // this check for boolean instead of doing a conditional statement
// }

// function palindrome(str){
//   let reversed = ''
//   for (let letter of str){
//     reversed = letter + reversed
//   }
//   if (reversed === str){
//     return true
//   }
//   else{
//     return false
//   }
// }

function palindrome(str){
  return str.split('').every((character,index)=>{
    return character === str[str.length - index - 1]
  })
}
// MIIIND BLLOOOWW
// might work for other complicated algos

module.exports = palindrome;
