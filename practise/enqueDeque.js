// Implement enqueue and dequeue using only two stacks

function enque(arr, item){
    arr.push(item);
    return arr;
}

function deque(arr){
    var len = arr.length;
    if(len==1){
        return [];
    }
    return arr.slice(1);
}

var testArray = [];
console.log(enque(testArray, 6));
console.log(deque(testArray));