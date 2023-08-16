const user = {
    name: 'supriya',
    age: 24
}

function printFunc(location, location2){
    console.log(this.name + " " +  this.age + " " + location + " " + location2 );
}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + 'should be a function');
    }

    context.func = this;
    return function(...args2){
        context.func(...args, ...args2)
    };
}

const bindedFunction = printFunc.myBind(user, 'A', 'B');
bindedFunction();
// console.log(bindedFunction());