function getData(data){
    console.log(data);
}

const debounce = (func, delay) => {
    let timer;
    return function(){
        const inputValue = document.getElementById("debounce-input").value;
        clearInterval(timer);
        timer = setTimeout(()=>{
            func(inputValue);
        }, delay);
    }  
}

const betterFunction = debounce(getData, 2000);