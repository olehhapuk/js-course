// Numbers

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(10 / 5);
// console.log(3 * 4);
// console.log(14 % 2); // Остача
// console.log(4 ** 2); // Степінь

// Conditions

// console.log(!false);
// console.log(1 !== 1);
// console.log(!(1 === 1));
// console.log(1 > 0);
// console.log(1 >= 1);
// console.log(0 < 1);
// console.log(1 <= 1);

// console.log(1 == '1');
// console.log(0 == false);
// console.log([] == '[]');
// console.log([] == []);

// Strings

// const name = 'John' + ' ' + 'Doe'; // Concatenation
// console.log(name);

// const info = ['John', 'Doe', 'Junior'];
// const fullName = info.join(' ');
// console.log(fullName);

// const testStr = fullName.replace('Junior', 'Senior');
// console.log(testStr);

// Objects

// const user = {
//   firstName: 'John',
// };

// user.lastName = 'Doe';
// delete user.lastName;

// user.age = 30;

// console.log(user);

// Array

// const students = ['Pablo', 'Andrew', 'Katjia', 'Jora'];

// students.push('Oleh');
// students.unshift('Anton');
// students.shift();
// students.pop();
// students.splice(1, 1);

// console.log(students);

// const test = 100;
// const testStr = test.toString();
// const money = testStr.replaceAll('0', '1');

// const num = Number(money);

// console.log(num);

// console.log(parseInt('John 1')); // NaN
// console.log(parseInt('1.01 John')); // 1
// console.log(parseFloat('1.01 John')); // 1.01
// console.log(Number('1.97'));

// const fullName = '1.01 John';
// const arr = fullName.split(' '); // ['1.01', 'John']
// const numStr = arr[0]; // '1.01'
// const num = Number(numStr); // 1.01

// // const num = Number(('1.01 John').split(' ')[0]);

// console.log(num);

// const data = [1, true, false, -1000];
// console.log(String(data));
// // console.log(data.join());

// const data = {
//   test: 'value',
// };
// const dataStr = JSON.stringify(data);
// console.log(dataStr);

// console.log(JSON.parse(dataStr));

// Array and Objects

// const arr1 = [10, 50, 120];
// const arr2 = ['John', 'Jane', 'Elizabeth'];
// const newArr = arr1.concat(arr2);

// console.log(arr1);
// console.log(newArr);

// const slicedArr = newArr.slice(1, 4);
// console.log(slicedArr);

// console.log(newArr.includes('Jane')); // true
// console.log(newArr.includes('Alex')); // false

// const reversedArray = newArr.slice().reverse();
// console.log(newArr);
// console.log(reversedArray);

// If statements

// const user = {
//   username: 'john_doe@12345',
//   password: 'strwaberrysugar',
// };

// const user = null;

// if (user) {
//   console.log('You are logged in!!!');
// } else {
//   console.log('You are not logged in :(');
// }

// const a = 2;
// const b = 1;

// if (a < b) {
//   console.log('a < b');
// } else if (a === 1) {
//   console.log('a === 1');
// } else if (b === 2) {
//   console.log('b === 2');
// } else {
//   console.log('Hello!');
// }

const a = 3;
const b = 3;
const c = 3;

// && expects true && true

if (a < b && a === c) {
  console.log('AND');
}

// || expects true || false OR false || true

if (a === 1 || b === 3) {
  console.log('OR');
}

// if (Boolean(user)) {
//   console.log('You are logged in!!!');
// }

// ЗАПАМ'ЯТАТИ

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
