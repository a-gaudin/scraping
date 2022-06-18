import { exec } from "child_process";
import { fork } from "child_process";

import * as config from "./config"
import * as csv from "./js/csv"
import * as dt from "./js/datetime"

function addTimestampToVariations(arr: any[], timestamp: number) {
  return arr.forEach((el) => el["timestamp"] = timestamp);
}

function isMarketOpen() {
  const now = dt.getDateTime();

  return (now.dayOfWeek >= params.startDay && now.dayOfWeek <= params.endDay &&
    now.timeInHours > params.startHour && now.timeInHours < params.endHour)
    ? true : false;
}

function getTimeToNextLoop(nowSeconds: number) {
  return params.loopTime - dt.secToMillisec(nowSeconds);
}

function getTimeToMarketOpening(nowHours: number) {
  const timeToOpening = nowHours < params.startHour ?
    dt.hoursToMillisec(params.startHour - nowHours) :
    dt.hoursToMillisec(24 - nowHours + params.startHour);

  return timeToOpening + params.margin;
}

function getTimestamp(now: any) {
  return (dt.hoursToMin(now.hours) + now.minutes - dt.hoursToMin(params.startHour)) /
    params.loopTime;
}

function loop() {
  if (isMarketOpen()) {
    let newVariations: {variation: number, url: string}[] = [];

    const now = dt.getDateTime();
    const timestamp = getTimestamp(now);
    console.log('Time: ' + now.time + ', Timestamp: ' + timestamp);

    const child = fork('./js/download.js');
    child.on('error', (err: string) => console.log(err));
    child.on('message', (data: {variation: number, url: string}[]) =>
        newVariations = data);

    setTimeout(function() {
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
  } else {
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

const params = config.params;
let variations: any[] = [];
const caffeinate = exec('caffeinate -d -i -m -s');
init();