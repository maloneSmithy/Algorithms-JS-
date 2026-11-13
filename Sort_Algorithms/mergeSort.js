const mergeSort = (arr) => {
  if(arr.length < 2){
    return arr;
  }
  const middle = Math.floor( arr.length / 2);
  const leftArr = arr.slice(0,middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr),mergeSort(rightArr));
}
const merge = (leftArr,rightArr) => {
  const sortedArr = [];
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]){
        sortedArr.push(leftArr.shift())
    }else{
        sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr,...leftArr,...rightArr]
}

console.log(mergeSort([-20,1,34,-9,-99,-900,30,47,-34,50,6,-3]))
