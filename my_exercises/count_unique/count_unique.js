function count_unique_pointer(arr) {
  if (arr.length === 0) return 0;
  unique = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      unique.push(arr[i + 1]);
    }
  }
  return unique.length;
}



// Hash map way

function buildMap(obj){
    map ={}
    for(let item of obj){
        map[item]= map[item]+1 || 1
    }
    return map
}

function count_unique(arr){
    if(arr.lengt===0) return 0
    let map = buildMap(arr)
    return Object.keys(map).length


}