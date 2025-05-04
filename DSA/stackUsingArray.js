class Stack {
        #s

    constructor(){
        this.#s = new Array()
    }

    size(){
        return this.#s.length
    }

    top(){
        let index = this.size() - 1
        if(index >= 0){
            return this.#s[index]
        }
    }

    push(element){
        this.#s.push(element)
    }

    pop(){
        this.#s.pop()
    }

    print(){
        console.log(this.#s)
    }
}

function main(){
    let myStack = new Stack()
    myStack.push(5)
    myStack.push(50)
    myStack.push(51)
    myStack.push(59)
    // myStack.print()
    myStack.pop()
    // myStack.print()
    // console.log(myStack.top())
    console.log(myStack.size())


}

main()