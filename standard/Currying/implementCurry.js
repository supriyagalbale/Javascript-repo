//write the implementation for currying ie. create a fucntion that would convert 
// sum(1, 2, 3, 4)   into    sum(1)(2)(3)(4)


function curry(func) {
    return function curriedFunc(...args){
        if(args.length >= func.length){
             return func(...args);
        }else{
            return function(...next){
               return curriedFunc(...args, ...next);
            }
        }
    }

}

function sum(a,b,c,d) {
    return a+b+c+d;
}

const totalSum = curry(sum);
console.log(totalSum(1,2,3,4));

