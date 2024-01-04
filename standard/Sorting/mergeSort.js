const merge = (arr1, arr2) =>{
    let mergedArray = [];
    let length1 = arr1.length
    let length2 = arr2.length
    let i=0, j=0;
    while(i<length1 && j<length2){
        if(arr1[i]<arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        }
        else{
            mergedArray.push(arr2[j])
            j++
        }    
    }
    if(i<length1){
        for(let p=i; p<length1; p++){
            mergedArray.push(arr1[p])
        }
    }
    if(j<length2){
        for(let p=j; p<length2; p++){
            mergedArray.push(arr2[p])
        }
    }
    // console.log(mergedArray);
    return mergedArray;
}

const mergeSort = (arr) =>{
    if(arr.length === 1 || arr.length === 0){
        return arr 
    }
    let arrLength = arr.length
    let left = arr.slice(0, arrLength/2) 
    let right =  arr.slice(arrLength/2) 
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([7, 5, 0 , 5, -3]));