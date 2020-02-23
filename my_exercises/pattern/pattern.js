function check(pattern,word){
     pattern_length = 0;
     for(let letter of pattern){
         if(typeof(parseInt(letter))==='number' && !isNaN(letter)){
             pattern_length+= parseInt(letter)
         }else{
             pattern_length+=1
         }
     }
     return pattern_length===word.length
}