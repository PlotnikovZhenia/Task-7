/*Create a function that takes 3 numeric values, each of which is placed in a separate promise.
Increase each number by 1 and return the result of the */
const promise_generator = function (num1,num2,num3) {
  return new Promise((resolve) => {
      ++num1;
      resolve(num1);
  }).then((value1) => {
    console.log(value1);
  }).then(new Promise((resolve) => {
    ++num2;
    resolve(num2);
}).then((value2) => {
  console.log(value2);
})).then(new Promise((resolve) => {
  ++num3;
  resolve(num3);
}).then((value3) => {
console.log(value3);
}));
}
  promise_generator(4,7,9);