const user = {
    name: 'supriya',
    age: 24
}

function printFunc(location, location2){
    console.log(this.name + " " +  this.age + " " + location + " " + location2 );
}

Function.prototype.myApply = function (context = {} , arg = []) {
    if(typeof this !== 'function'){
        throw new Error(this + 'should be a function');
    }
    if(!Array.isArray(arg)){
        throw new Error('arg should be of type array');
    }

    context.func = this;
    context.func(...arg);
}

printFunc.myApply(user, ['jbp', 'bhopal']);