function millisecToSec(milliseconds) {
  return milliseconds / 1000;
}

function secToMillisec(seconds) {
  return 1000 * seconds;
}

function hoursToMin(hours) {
  return 60 * hours;
}

function hoursToSec(hours) {
  return 3600 * hours;
};

function hoursToMillisec(hours) {
  return 1000 * 3600 * hours;
}

function getTimeDifference(datetimeStart, datetimeEnd) {
  return Math.round(
    hoursToSec(datetimeEnd.timeInHours - datetimeStart.timeInHours));
}

function getDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1 to 12
  const day = now.getDate(); // 1 to 31
  const dayOfWeek = now.getDay(); // 0 to 6
  const date = year + '-' + twoDigits(month) + '-' + twoDigits(day);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return {
    date: date, dateHours: date + '_' + hours + 'h', dayOfWeek: dayOfWeek,
    hours: hours, minutes: minutes, seconds: seconds,
    time: twoDigits(hours) + ':' + twoDigits(minutes),
    timeInHours: hours + minutes / 60 + seconds / 3600
  };
}

function twoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

module.exports = {
  millisecToSec: millisecToSec,
  secToMillisec: secToMillisec,
  hoursToMin: hoursToMin,
  hoursToSec: hoursToSec,
  hoursToMillisec: hoursToMillisec,
  getTimeDifference: getTimeDifference,
  getDateTime: getDateTime
}
