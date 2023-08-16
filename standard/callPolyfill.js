function printFunc(location) {
    console.log(this.name + " " + this.age + " " + location);
}

const user = {
    name: "supriya",
    age: 24
}

// printFunc.call(user, "Jabalpur");

Function.prototype.myCall = function(context, ...args){
    if(typeof this !== 'function'){
        // console.error('should be called over a function');
        throw new Error('should be called over a function');
    }

    context.func = this;
    context.func(...args);
}
