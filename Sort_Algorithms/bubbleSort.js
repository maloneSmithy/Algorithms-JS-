const bubbleSortAsce = (arr) => {
  let swapped;
  do{
    swapped = false;
    for(let i=0; i<arr.length - 1; i++){
        if(arr[i] > arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
            swapped = true ;
        }
    }
  }while(swapped)
    return arr;
}
console.log(bubbleSortAsce([-122,4000,500,20,-33,4333,-13,20,-55]))

const bubbleSortDec = (arr) => {
  let swapped;
  do{
    swapped = false;
    for(let i=0; i<arr.length - 1; i++){
        if(arr[i] < arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
            swapped = true ;
        }
    }
  }while(swapped)
    return arr;
}
console.log(bubbleSortDec([-122,4000,500,20,-33,4333,-13,20,-55]))