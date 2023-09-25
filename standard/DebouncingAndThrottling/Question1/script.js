// Create button UI and add DEBOUNCE FUNCTION and THROTTLE FUNCTION as follows
// Show "Button pressed <X> times" every time button is pressed
// Show "Function called <Y> times" every time fucntion is called after 500ms

const throttle = (delayTime) => {
    let flag = true;
    let buttonClicked = 0;
    let functionCalledAfterDelay = 0;
    // let timer;
    return function () {
        buttonClicked++;
        if(flag) {
            functionCalledAfterDelay++;
            console.log('Button clicked ', buttonClicked);
            console.log('Function called ', functionCalledAfterDelay);
            flag = false;
            setTimeout(()=>{
                flag = true;
            }, delayTime);
        }
        
    }

}

const debounce = (delayTime) => {
    let buttonClicked = 0;
    let functionCalledAfterDelay = 0;
    let timer;

    return function () {
        buttonClicked++;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            functionCalledAfterDelay++;
            console.log('Button clicked ', buttonClicked);
            console.log('Function called ', functionCalledAfterDelay);
        }, delayTime);
    }
}
// const onButtonClick = debounce(500);
const onButtonClick = throttle(500);