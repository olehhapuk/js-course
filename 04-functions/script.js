// Interaction with user

// alert('Notification');
// const isSure = confirm('Are you sure?');
// console.log(isSure);
// const email = prompt('Enter your email');
// console.log(email);

// Functions

// const cook = 'Jane';
// const dish = 'Pasta';
// // console.log(cook + ' cooks ' + dish);
// console.log(`${cook} cooks ${dish}`);

// function makeDish(cook, dish) {
//   return `${cook} cooks ${dish}`;
// }

// console.log(makeDish('John', 'Lasagna'));

// let result2 = makeDish('Jane', 'Pasta');
// result2 += ' modified';
// alert(result2);

// Scope

// const myName = 'global test';

// function test() {
//   const myName = 'local test';
//   console.log(myName);
//   return {
//     a: 'a',
//     b: 'b',
//   };
// }

// const result = test('test param');
// console.log(result.c);

// Return value

// const dishes = [
//   {
//     name: 'Pasta',
//     spicy: true,
//     calories: 100000,
//     price: 300,
//   },
//   {
//     name: 'Lasagna',
//     spicy: false,
//     calories: 1,
//     price: 400,
//   },
//   {
//     name: 'Pelmeni',
//     spicy: false,
//     calories: 0.5,
//     price: 500,
//   },
// ];

// function makeDish(index, cook) {
//   const dish = dishes[index];
//   alert(
//     `${cook} is preparing ${dish.name}, spicy: ${dish.spicy}, calories: ${dish.calories}`
//   );

//   return {
//     dish: dish,
//     cook: cook,
//   };
// }

// const result = makeDish(2, 'Janet');
// console.log(result);

// Optional parameters

// function addNumbers(a, b = 4) {
//   // if (typeof a === 'number' && typeof b === 'number') { Allows NaNs
//   if (!isNaN(a) && !isNaN(b)) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log(a + b);
//   } else {
//     console.error('a and b should be numbers');
//   }
// }

// addNumbers('a', 10);

// Rest operator

// function getMaxNumber(...numbers) {
//   console.log(numbers);
//   let biggestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
//   }

//   return biggestNumber;
// }

// console.log(getMaxNumber(1, 2, 3));

// function makeUser(username, password, ...otherData) {
//   const user = {
//     username: username,
//     password: password,
//     otherData: otherData,
//   };

//   return user;
// }

// console.log(makeUser('johndoe', 'password', 2000, 'Pasta'));

// Methods

// const user = {
//   username: 'john_doe',
//   password: 'password',
//   logInfo() {
//     console.log(this);
//   },
// };

// user.logInfo();

// First class functions

// function test() {
//   console.log('test');
// }

// const abc = test;

// abc();
// test();

// Callbacks

// function loginUser(username, password, callback) {
//   const inputUsername = prompt('Enter username');
//   const inputPassword = prompt('Enter password');

//   setTimeout(function () {
//     if (inputUsername === username && inputPassword === password) {
//       callback(true);
//     } else {
//       callback(false);
//     }
//   }, 1000);
// }

// function handleLogin(result) {
//   console.log(result);
// }

// loginUser('john_doe', 'password', handleLogin);

// Arrow functions

// function addNumbers(a, b) {
//   return a + b;
// }

// const addNumbers = (a, b) => a + b;

// const result = addNumbers(1, 3);

// console.log(result);

// const user = {
//   username: 'john_doe',
//   logInfo: () => {
//     console.log('test');
//   },
// };

// Function declaration
function test() {}

// Anonymous function expression
const test = function () {};

// Object methods
const user = {
  login() {},
  logout: () => {},
};

// Arrow functions(Function expression)
const test = () => {};
