const quickSort = (arr) =>{
    let len = arr.length
    if(len === 0 || len === 1){
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    for(let i=1; i<len; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i]);
        }
    }
    let sortedLeft = quickSort(left);
    // console.log('sortedL ', sortedLeft);
    
    let sortedRight = quickSort(right);
    // console.log('sortedR ', sortedRight);

    return [...sortedLeft, pivot, ...sortedRight];
}

console.log(quickSort([3, 7, 9, 5, 100, -2, 100, -100, 8 ]))