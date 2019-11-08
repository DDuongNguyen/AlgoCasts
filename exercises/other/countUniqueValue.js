function counterUniqueValues(arr){
const map={}
for (let ele of arr){
    map[ele] = map[ele]+1 || 1
}
console.log(Object.keys(map).length)
}
