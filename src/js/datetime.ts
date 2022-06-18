function millisecToSec(milliseconds: number) {
  return milliseconds / 1000;
}

function secToMillisec(seconds: number) {
  return 1000 * seconds;
}

function hoursToMin(hours: number) {
  return 60 * hours;
}

function hoursToSec(hours: number) {
  return 3600 * hours;
};

function hoursToMillisec(hours: number) {
  return 1000 * 3600 * hours;
}

function getTimeDifference(datetimeStart: number, datetimeEnd: number) {
  return Math.round(hoursToSec(datetimeEnd - datetimeStart));
}

function getDateTime() {
  const now: Date = new Date();
  const year: number = now.getFullYear();
  const month: number = now.getMonth() + 1; // 1 to 12
  const day: number = now.getDate(); // 1 to 31
  const date: string = year + '-' + twoDigits(month) + '-' + twoDigits(day);
  const hours: number = now.getHours();
  const minutes: number = now.getMinutes();
  const seconds: number = now.getSeconds();
  return {
    date: date,
    dateHours: date + '_' + hours + 'h',
    dayOfWeek: now.getDay(), // 0 to 6
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    time: twoDigits(hours) + ':' + twoDigits(minutes),
    timeInHours: hours + minutes / 60 + seconds / 3600
  };
}

function twoDigits(n: number) {
  return (n < 10 ? '0' : '') + n;
}

// module.exports = {
//   millisecToSec: millisecToSec,
//   secToMillisec: secToMillisec,
//   hoursToMin: hoursToMin,
//   hoursToSec: hoursToSec,
//   hoursToMillisec: hoursToMillisec,
//   getTimeDifference: getTimeDifference,
//   getDateTime: getDateTime
// }

export {
  millisecToSec,
  secToMillisec,
  hoursToMin,
  hoursToSec,
  hoursToMillisec,
  getTimeDifference,
  getDateTime
}
