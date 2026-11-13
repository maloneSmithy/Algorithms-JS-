const Fibb = (n) => {
  let arr=[0,1];
  for(let i=2; i<n; i++){
    arr[i]= arr[i-1] + arr[i-2] ;
  }
return arr;
}
console.log(Fibb(10))

//Recusive Fibb
const RecursiveFibb = (n) => {
  if(n<2){
    return n;
  }
 return RecursiveFibb(n-1) + RecursiveFibb(n-2)
}
console.log(RecursiveFibb(9))

