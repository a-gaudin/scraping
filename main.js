"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const child_process_2 = require("child_process");
const cfg = require("./config");
const csv = require("./js/csv");
const dt = require("./js/datetime");
function addTimestampToVariations(arr, timestamp) {
    return arr.forEach((el) => el["timestamp"] = timestamp);
}
function isMarketOpen() {
    const now = dt.getDateTime();
    return (now.dayOfWeek >= market.startDay && now.dayOfWeek <= market.endDay &&
        now.timeInHours > market.startHour && now.timeInHours < market.endHour)
        ? true : false;
}
function getTimeToNextLoop(nowSeconds) {
    return params.loopTime - dt.secToMillisec(nowSeconds);
}
function getTimeToMarketOpening(nowHours) {
    const timeToOpening = nowHours < market.startHour ?
        dt.hoursToMillisec(market.startHour - nowHours) :
        dt.hoursToMillisec(24 - nowHours + market.startHour);
    return timeToOpening + params.margin;
}
function getTimestamp(now) {
    return (dt.hoursToMin(now.hours) + now.minutes - dt.hoursToMin(market.startHour)) /
        params.loopTime;
}
function loop() {
    if (isMarketOpen()) {
        let newVariations = [];
        const now = dt.getDateTime();
        const timestamp = getTimestamp(now);
        console.log('Time: ' + now.time + ', Timestamp: ' + timestamp);
        const child = (0, child_process_2.fork)('./js/download.js');
        child.on('error', (err) => console.log(err));
        child.on('message', (data) => newVariations = data);
        setTimeout(function () {
            child.kill();
            console.log('Download child process killed');
            console.log('Result count: ' + newVariations.length);
            addTimestampToVariations(newVariations, timestamp);
            variations = [...variations, ...newVariations];
            csv.create(variations, 'variations', true);
            const timeToNextLoop = params.loopTime - params.timeout;
            console.log(`Time to next download series: ${dt.millisecToSec(timeToNextLoop)}s`);
            setTimeout(loop, timeToNextLoop);
        }, params.timeout);
    }
    else {
        caffeinate.kill();
        console.log('Download stopped: Market is now closed');
    }
}
function init() {
    const now = dt.getDateTime();
    const timeToStart = isMarketOpen() ?
        getTimeToNextLoop(now.seconds) :
        getTimeToMarketOpening(now.timeInHours);
    console.log(`Time to start: ${dt.millisecToSec(timeToStart)}s`);
    setTimeout(loop, timeToStart);
}
const market = cfg.marketParams;
const params = cfg.requestParams;
const caffeinate = (0, child_process_1.exec)('caffeinate -d -i -m -s');
let variations = [];
init();
