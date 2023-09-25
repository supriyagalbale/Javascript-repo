const addToCart = (item) =>{
    const pr = new Promise((resolve, reject)=>{
        if(!item){
            const error = new Error('item not found');
            reject(error)
        }
        const cartid = 'cartid1234'
        resolve(cartid);
    })
    return pr;
}

const createOrder = (cartid) =>{
    const pr = new Promise((resolve, reject)=>{
        if(!cartid){
            const e = new Error('cartid not found');
            reject(e);
        }
        const orderId = 'orderid1234'
        resolve(orderId);
    })
    return pr;
}

const placeOrder = (orderId) =>{
    const pr = new Promise((resolve, reject)=>{
        if(!orderId){
            const error = new Error('orderId not found');
            reject(error)
        }
        const amount = 'amount1234'
        resolve(amount);
    })
    return pr;
}

const makePayment = (amount) =>{
    const pr = new Promise((resolve, reject)=>{
        if(!amount){
            const error = new Error('payment failed');
            reject(error)
        }
        resolve();
    })
    return pr;
}

addToCart()
.then((cartid)=>{
    // console.log(cartid);
    return createOrder(cartid);
})
.catch((e)=>{
    console.log(e);
})
.then((orderId)=>{
    // console.log(orderId);
    //arrow function so not necessary to write return keyword
    return placeOrder(orderId)
})
.then((amount)=>{
    makePayment(amount);
})
.then(()=>{
    console.log('payment successful');
})
.catch((e)=>{
    console.log(e);
})