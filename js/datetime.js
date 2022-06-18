"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateTime = exports.getTimeDifference = exports.hoursToMillisec = exports.hoursToSec = exports.hoursToMin = exports.secToMillisec = exports.millisecToSec = void 0;
function millisecToSec(milliseconds) {
    return milliseconds / 1000;
}
exports.millisecToSec = millisecToSec;
function secToMillisec(seconds) {
    return 1000 * seconds;
}
exports.secToMillisec = secToMillisec;
function hoursToMin(hours) {
    return 60 * hours;
}
exports.hoursToMin = hoursToMin;
function hoursToSec(hours) {
    return 3600 * hours;
}
exports.hoursToSec = hoursToSec;
;
function hoursToMillisec(hours) {
    return 1000 * 3600 * hours;
}
exports.hoursToMillisec = hoursToMillisec;
function getTimeDifference(datetimeStart, datetimeEnd) {
    return Math.round(hoursToSec(datetimeEnd - datetimeStart));
}
exports.getTimeDifference = getTimeDifference;
function getDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 1 to 12
    const day = now.getDate(); // 1 to 31
    const date = year + '-' + twoDigits(month) + '-' + twoDigits(day);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return {
        date: date,
        dateHours: date + '_' + hours + 'h',
        dayOfWeek: now.getDay(),
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        time: twoDigits(hours) + ':' + twoDigits(minutes),
        timeInHours: hours + minutes / 60 + seconds / 3600
    };
}
exports.getDateTime = getDateTime;
function twoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}
