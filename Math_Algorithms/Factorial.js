const Factorial = (n) => {
  let result = 1; // factorials can't be multiplied by 0
  for(let i=2; i<=n; i++){
    result = result * i;
  }
  return result;
}
console.log(Factorial(5))// big-O = O(n)

const recursiveFactorial = (n) => {
  if(n===0){
    return 1;
  }
  return recursiveFactorial(n-1)*n;
}
console.log(recursiveFactorial(5))// big-O = O(n)
