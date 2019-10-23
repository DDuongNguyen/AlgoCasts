// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  char= {}
  max = 0;
  maxChar= ''
for (let letter of str){
  // if (!char[letter]){
  //   char[letter]=1
  // }
  // else{
  //   char[letter]++
  // }
  char[letter] = char[letter] + 1 || 1
}
console.log(char)
// console.log(Object.values(char))
// console.log(Object.keys(char).reduce((a, b) => char[a] > char[b] ? a : b))

for (let obj in char){
  if (char[obj] > max){
  max = char[obj]
  maxChar = obj
}}

return maxChar
// return Object.keys(char).reduce((a, b) =>{return char[a] > char[b] ? a : b},0)


}

module.exports = maxChar;
