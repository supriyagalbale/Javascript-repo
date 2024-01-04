function job() {
    return new Promise(function(resolve, reject){
        reject();
    })
}

const promise1 = job();

promise1
    .then(function(){
        console.log('Success 1')
    })
    .then(function(){
        console.log('Success 2')
    })
    .then(function(){
        console.log('Success 3')
    })
    .catch(function(){
        console.log('Error 1')
    })
    .then(function(){
        console.log('Success 4')
    })
    .then(function(temp){
        console.log('Success 5')
    })
    .catch(function(){
        console.log('Error 2')
    })
    .then(function(temp){
        console.log('Success 6')
    })
    