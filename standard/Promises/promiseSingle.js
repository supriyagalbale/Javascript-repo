const createOrder = (item) =>{
    const pr = new Promise(function(resolve, reject){
        if(!item){
            const error = new Error('item not found');
            reject(error);
        }
    
        const id = `${item}1234`;
        resolve(id);
    });
    return pr;
}

createOrder()
.then((orderId)=>{console.log(orderId)})
.catch((e)=>{console.log(e)});