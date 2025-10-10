// function test(a, cb) {
//   cb(a, 'testparam');
// }

// // function callback(a, b) {
// //   console.log(a, b);
// // }

// test(1, (a, b) => {
//   console.log(a, b);
// });

// const timeoutId = setTimeout(() => {
//   console.log('timeout');
// }, 1000);

// clearTimeout(timeoutId);

// const intervalId = setInterval(() => {
//   console.log('interval');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// Math

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function randomRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randomRange(3, 10));
console.log(Math.pow(3, 3));
