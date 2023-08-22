// make a function that can calculate sum no matter how it is called 
// sum(1)(2)(3)(4)....(n)()  or   sum(1,2,3)(4)(5,6)...(n)();


const sum = (...args1) => {
  let sumArgs1 = 0;
  args1.forEach((value) => {
    sumArgs1 = sumArgs1 + value;
  });
  return (...args2) => {
    if (args2.length > 0) {
      let sumArgs2 = 0;
      args2.forEach((item) => {
        sumArgs2 = sumArgs2 + item;
      });
      return sum(sumArgs1 + sumArgs2);
    }
    return sumArgs1;
  };
};
console.log(sum(1,2)(2,5,6)(3)());
