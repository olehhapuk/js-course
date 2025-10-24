const names = ['John', 'Jane', 'Andrew', 'Bohdan'];

// const namesDuplicate = names.slice();

// for (let i = 0; i < namesDuplicate.length; i++) {
//   const name = namesDuplicate[i];
//   if (name.toLowerCase().startsWith('j')) {
//     const nameIndex = names.indexOf(name);
//     names.splice(nameIndex, 1);
//   }
// }

// function filter(array, cb) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     const isOk = cb(item, i, array);
//     if (isOk) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const result = filter(names, (name) => !name.toLowerCase().startsWith('j'));

// console.log(result);

// function forEach(array, cb) {
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];

//     cb(item, i, array);
//   }
// }

// forEach(names, (name) => console.log(name));

const result1 = names.forEach((name) => console.log(name));
console.log('result1', result1);

const result2 = names.filter((name) => name.toLowerCase().startsWith('j'));
console.log('names', names);
console.log('result2', result2);

const result3 = names.map((name) => {
  if (name.toLowerCase().startsWith('j')) {
    return 'Jonathan';
  } else {
    return name + ' :)';
  }
});
console.log('names', names);
console.log('result3', result3);

const result4 = names.map((name) => {
  const nameElem = document.createElement('p');
  nameElem.textContent = name;
  return nameElem;
});
console.log('names', names);
console.log('result4', result4);

document.body.append(...result4);

// const result5 = names.find((name) => name.startsWith('A'));
const result5 = names.findIndex((name) => name.startsWith('A'));
console.log('result5', result5);

// Modifies existing array
const result6 = names.reverse();
console.log('names', names);
console.log('result6', result6);

const result7 = names.sort((a, b) => {
  // if (a.length > b.length) {
  //   return -1; // a, b
  // } else {
  //   return 1; // b, a
  // }

  // if (a[0] < b[0]) {
  //   return -1;
  // } else {
  //   return 1;
  // }

  return a.localeCompare(b);
});

// const result7 = names.sort((a, b) => a.localeCompare(b)); // Sort by alphabet

console.log('result7', result7);
