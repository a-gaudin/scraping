import { ChildProcess, exec } from "child_process";
import { fork } from "child_process";

import * as cfg from "./config"
import * as csv from "./js/csv"
import * as dt from "./js/datetime"

function addTimestampToVariations(arr: VariationsTimestamp, timestamp: number) {
  return arr.forEach((el) => el["timestamp"] = timestamp);
}

function isMarketOpen() {
  const now = dt.getDateTime();

  return (now.dayOfWeek >= market.startDay && now.dayOfWeek <= market.endDay &&
    now.timeInHours > market.startHour && now.timeInHours < market.endHour)
    ? true : false;
}

function getTimeToNextLoop(nowSeconds: number) {
  return params.loopTime - dt.secToMillisec(nowSeconds);
}

function getTimeToMarketOpening(nowHours: number) {
  const timeToOpening: number = nowHours < market.startHour ?
    dt.hoursToMillisec(market.startHour - nowHours) :
    dt.hoursToMillisec(24 - nowHours + market.startHour);

  return timeToOpening + params.margin;
}

function getTimestamp(now: dt.DateTime) {
  return (dt.hoursToMin(now.hours) + now.minutes - dt.hoursToMin(market.startHour)) /
    params.loopTime;
}

function loop() {
  if (isMarketOpen()) {
    let newVariations: any[] = [];

    const now: dt.DateTime = dt.getDateTime();
    const timestamp: number = getTimestamp(now);
    console.log('Time: ' + now.time + ', Timestamp: ' + timestamp);
    
    const child: ChildProcess = fork('./js/download.js');
    child.on('error', (err: string) => console.log(err));
    child.on('message', (data: Variations) => newVariations = data);

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
  const now: dt.DateTime = dt.getDateTime();
  
  const timeToStart: number = isMarketOpen() ?
    getTimeToNextLoop(now.seconds) :
    getTimeToMarketOpening(now.timeInHours);

  console.log(`Time to start: ${dt.millisecToSec(timeToStart)}s`);
  
  setTimeout(loop, timeToStart);
}

const market = cfg.marketParams as cfg.MarketParams;
const params = cfg.requestParams as cfg.RequestParams;

const caffeinate = exec('caffeinate -d -i -m -s');

type Variations = {
  variation: number,
  url: string
}[]

type VariationsTimestamp = {
  variation: number,
  url: string,
  timestamp: number
}[]

let variations: VariationsTimestamp = [];

init();