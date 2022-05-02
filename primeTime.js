function prime(num) {
  let res = [];
  for(let i=2; i<=num; i++){
    if(isPrime(i)){
      res.push(i)
    }
  }
  return res
}

function isPrime(num){
  
  if(num<2){
    return false
  }
  
  for(let i=2; i<=Math.sqrt(num);i++){
    if(num%i===0){
      return false
    }
  }
  return true
}