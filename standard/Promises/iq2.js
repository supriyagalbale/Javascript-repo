const firstPromise = new Promise((resolve, reject)=>{
    resolve('first');
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
})

secondPromise
    .then((newPro)=>{
        return newPro;
    })
    .then((word)=>{
        console.log(word);
    })