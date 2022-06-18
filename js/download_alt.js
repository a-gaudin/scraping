"use strict";
// const scrape = require('scrape');
// import * as cfg from '../config'
// import * as dt from "./datetime"
// const params = cfg.params;
// const urls = cfg.urls;
// type Variation = {
//   variation: number,
//   url: string
// }
// let allVariations: Variation[] = [];
// const startTime = dt.getDateTime();
// scrape.concurrent(urls, params.concurrentPageDownloads, function(url: string, next: any) {
//   if (url) {
//     const options = {
//       url: url,
//       timeout: dt.millisecToSec(params.timeout)
//     };
//     scrape.request(options, function(err: any, refactorResults: any) {
//       if (err) {
//         console.error(`>> Scraping error on ${url}: ${err}`);
//       } else {
//         refactorResults(params.selection).each(function(result: any) {
//           let variation = {} as Variation;
//           const scraped: string | undefined = result.children[0].data;
//           if (typeof scraped !== 'undefined') {
//             const now: Date= dt.getDateTime();
//             const duration: number = dt.getTimeDifference(startTime.timeInHours, now.timeInHours);
//             variation.variation = convertToNumber(scraped); // '+0.18%' becomes 0.18
//             variation.url = getURLend(url);
//             console.log(`>> ${duration}s - Variation ${url}: ${variation.variation}`);
//             allVariations.push(variation);
//             process.send(allVariations);
//           } else {
//             console.log(`>> Variation ${url}: Undefined.`);
//           }
//         });
//         next();
//       }
//     });
//   } else {
//     console.log('>> Downloads are finished.');
//   }
// });
// function convertToNumber(str: string) {
//   str.replace(/\+/g, '');
//   str.replace(/%/g, '');
//   return parseFloat(str);
// }
// function getURLend(str: string) {
//   return str.split('/')[4];
// }
