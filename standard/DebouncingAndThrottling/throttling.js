function getData(data) {
  // console.log(data);
  console.log("throttle");
}
const throttle = (func, delay) => {
  console.log("this rannn.......");
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

betterFunctionThrottle = throttle(getData, 300);
window.addEventListener("resize", getData);
