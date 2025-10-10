// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// console.log(days[date.getDay()]);

const timerElem = document.querySelector('#timer');

function handleTimerTick() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  timerElem.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

setInterval(handleTimerTick, 1000);
handleTimerTick();

const currentDate = new Date();
const futureDate = new Date('2025-10-30 00:00:00');
futureDate.setDate(0);
futureDate.setMonth(0);
futureDate.setHours(0);
futureDate.setFullYear(futureDate.getFullYear() + 1);

const isoDate = new Date().toISOString();
console.log(new Date(isoDate));

const diffMs = futureDate - currentDate;

const days = diffMs / 1000 / 60 / 60 / 24;
const hours = diffMs / 1000 / 60 / 60;
const minutes = diffMs / 1000 / 60;
const seconds = diffMs / 1000;

console.log(hours % 24);
console.log(minutes % 60);
console.log(seconds % 60);
