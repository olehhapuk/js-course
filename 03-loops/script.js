// Shortcuts

// const username = 'john';
// const isLoggedIn = username === 'john' ? true : false;

// if (username === 'john') {
//   isLoggedIn = true;
// } else {
//   isLoggedIn = false;
// }

// const newUsername = username || 'default-user';
// let newUsername;
// Boolean(username) === false
// if (!username) {
//   newUsername = 'default-user';
// } else {
//   newUsername = username;
// }

// const newUsername = username ?? 'default-user';
// if (username === null || username === undefined) {
//   newUsername = 'default-user';
// } else {
//   newUsername = username;
// }

// console.log(newUsername);

// Loops
// index = index + 1;
// index += 1;
// index++;

// const students = [
//   {
//     name: 'Anjie',
//     avgMark: 8,
//   },
//   {
//     name: 'John',
//     avgMark: 1,
//   },
//   {
//     name: 'Andrew',
//     avgMark: 4,
//   },
//   {
//     name: 'Pablo',
//     avgMark: 5,
//   },
//   {
//     name: 'Svyatoslaw',
//     avgMark: 10,
//   },
// ];

// let index = 0;
// let targetStudent = students[0];

// while (index < students.length) {
//   const student = students[index];
//   if (student.avgMark < targetStudent.avgMark) {
//     targetStudent = student;
//   }

//   index++;
// }

// console.log(targetStudent.name + ' До дошки');

// const students = [];

// let index = 0;
// let targetStudent;

// do {
//   console.log('iteration');
//   // const student = students[index];
//   // if (student.avgMark < targetStudent.avgMark) {
//   //   targetStudent = student;
//   // }

//   index++;
// } while (index < students.length);

// // console.log(targetStudent.name + ' До дошки');

const students = [
  {
    name: 'Anjie',
    avgMark: 8,
  },
  {
    name: 'John',
    avgMark: 1,
  },
  {
    name: 'Andrew',
    avgMark: 4,
  },
  {
    name: 'Pablo',
    avgMark: 5,
  },
  {
    name: 'Svyatoslaw',
    avgMark: 10,
  },
];

// let index = 0;
// let targetStudent = students[0];

// while (index < students.length) {
//   const student = students[index];
//   if (student.avgMark < targetStudent.avgMark) {
//     targetStudent = student;
//   }

//   index++;
// }

// let targetStudent = students[0];

// for (let index = 0; index < students.length; index++) {
//   const student = students[index];
//   if (student.avgMark < targetStudent.avgMark) {
//     targetStudent = student;
//   }
// }

// console.log(targetStudent);

// for (const student of students) {
//   console.log(student);
// }

const student = {
  name: 'John',
  avgMark: 10,
  grade: 7,
};

// for (const key in student) {
//   const value = student[key];
//   console.log(key, value);
// }

const key = 'grade';

// const value = student.name;
const value = student[key];
console.log(value);
