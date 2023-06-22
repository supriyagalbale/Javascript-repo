
function temp(a,b){
    function temp2(c){
        console.log(a*c);
    }
    temp2(b);
}
// temp(3,2);



// Q-1: Write a function that would allow you to do this
// You can create a closure to keep the value of a even after the inner function is returned. 
// The inner function that is being returned is created within an outer function, making it a closure, 
// and it has access to the variables within the outer function, in this case the variable a.

function closure(a){
    return function closure2(b){
        return function closure3(c){
            return a*b*c;
        }
    }
}

console.log(closure(2)(3)(5));