const btnElem = document.querySelector('#btn');

function randomRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const colors = ['#E5FFDE', '#BBCBCB', '#9590A8', '#634B66', '#18020C'];

// btnElem.onclick = () => {
//   console.log(1);
// };
// btnElem.onclick = () => {
//   console.log(2);
// };

// btnElem.addEventListener('click', (e) => {
//   const randomIndex = randomRange(0, colors.length - 1);
//   const randomColor = colors[randomIndex];

//   document.body.style.backgroundColor = randomColor;
// });

btnElem.addEventListener('click', () => {
  console.log(1);
});

btnElem.addEventListener('click', () => {
  console.log(2);
});
