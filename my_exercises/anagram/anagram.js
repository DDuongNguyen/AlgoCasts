function buildMap(arr) {
  map = {};
  for (let item of arr) {
    map[item] = map[item] + 1 || 1;
  }
  return map;
}
function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  map1 = buildMap(str1);
  map2 = buildMap(str2);

  for (let letter in map1) {
    if (map1[letter] !== map2[letter]) {
      return false;
    }
  }
  return true;
}

function cheatagram(str1,str2){
      if (str1.length !== str2.length) return false;
      if(str1.sort() !== str2.sort()) return false
      return true
}

// str1 = "meow";
// str2 = "moew";
// str3 = "moow";
// str4 = "meoww";
// anagram(str1, str4);
