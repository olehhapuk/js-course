// Primitive types

// const message = 'Hello, World!'; // string
// console.log(message);

// const age = 103; // number
// console.log(age);

// const isOpen = true; // boolean(true, false)
// console.log(isOpen);

// const empty = undefined; // undefined
// console.log(empty);

// let test;
// console.log(test);

// let megaEmpty = null; // null
// console.log(megaEmpty);

// Complex types

// const students = []; // Array
// console.log(students);

// const person = {}; // Object
// console.log(person);

// console.log('--------------------------');

// console.log(0.1 + 0.2); // Float computing error

// const a = 1;
// const b = 2;
// const result = a + b;
// console.log(result);

// console.log('--------------------------');

// Arrays

// const students = ['Катя', 'Андрій', 'Павло'];
// console.log(students);
// console.log(students[1]);

// students[1] = 'Евтанахій';
// students[10] = 'Ігор';

// console.log(students);
// console.log(students[-1]);

// Objects

// const person = {
//   name: 'John',
//   surname: 'Doe',
//   eyeColor: 'grey',
//   sex: 'male',
//   age: 103,
// };
// console.log(person);

// person.name = 'Jane';
// person.sex = 'female';
// person.favoriteColor = 'Red';

// person.favoriteColor = null;

// console.log(person.favoriteColor);

// const data = 1;
// console.log(typeof data);

const obj1 = {};
const obj2 = obj1;

obj1.username = 'John';
obj2.username = 'Jane';

console.log(obj1);
console.log(obj2);

console.log(obj1 === obj2);
