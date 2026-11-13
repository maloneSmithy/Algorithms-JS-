const isPrime = (n) => {
  if(n<2){
    return false;
  }
  for(let i; i<n; i++ ){
    if(n%i===0){
        return false;
    }
  }
  return true;
}
console.log(isPrime(4))