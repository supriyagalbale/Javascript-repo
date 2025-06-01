class MinHeap  {
    constructor(){
        this.arr = new Array()
        this.len = 0 
    }

    heapifyTopToBottom(){
        let curr = 0
        while(curr < this.len){
            let min = curr
            let left = 2*curr + 1
            let right = 2*curr + 2

            if( left < this.len && this.arr[left] < this.arr[min] ){
                min = left
            }
             if(  right < this.len && this.arr[right] < this.arr[min] ){
                min = right
            }
            if(min === curr){
                return
            }
            [this.arr[curr], this.arr[min]] = [this.arr[min], this.arr[curr]]
            curr = min
        }
    }

    heapifyBottomToTop(){
        let curr = this.len-1
        while(curr > 0){
            let parent = Math.floor( (curr-1) / 2 )
            if( this.arr[ curr ] < this.arr[ parent ] ){
                [this.arr[curr], this.arr[parent]] = [this.arr[parent], this.arr[curr]]
                curr = parent
            }
            else{
                return 
            }
        }
    }

    add(n){
        this.arr.push(n)
        this.len++
        this.heapifyBottomToTop()
        
    }

    remove(){
        if(this.len == 0) return null

        let min = this.arr[0]
        this.len = this.len - 1;
        [ this.arr[0], this.arr[this.len ] ] = [ this.arr[this.len ], this.arr[0] ]
        
        this.arr.pop()
        
        this.heapifyTopToBottom()
        
        return min
    }

    getMin(){
        if(this.len > 0){
            return this.arr[0]
        }
        return null
    }
}

function main(){
    console.log("helloooo")
    let myHeap = new MinHeap()
    myHeap.add(5)
    myHeap.add(4)
    myHeap.add(1)
    myHeap.add(6)
    console.log(myHeap.getMin())
    console.log(myHeap.remove())
}
main()