function same(arr1,arr2){
  let arr = []
  for(let number of arr1){
    arr.push(Math.pow(number,2))
    let str1= arr.sort().toString()
    let str2= arr2.sort().toString()

    return str1===str2
  }
}
