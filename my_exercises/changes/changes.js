function changes(amount,currency){
    remainder= amount
    arr=[]
    for(let coin_value of currency){
        coins= parseInt(remainder/coin_value)
        remainder-=(coins*coin_value)
        arr.push(coins)
    }
    return arr
}