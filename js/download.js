const scrape = require('scrape');
const cfg = require('./../config.js');
const dt = require('./datetime.js');

const params = cfg.params;
const urls = cfg.urls;

let allVariations = [];

const startTime = dt.getDateTime();

scrape.concurrent(urls, params.concurrentPageDownloads, function(url, next) {
  if (url) {
    const options = {url: url, timeout: dt.millisecToSec(params.timeout)};

    scrape.request(options, function(err, refactorResults) {
      if (err) {
        console.error(`>> Scraping error on ${url}: ${err}`);
      } else {
        refactorResults(params.selection).each(function(result) {
          let variation = {};
          const scraped = result.children[0].data;

          if (typeof scraped !== 'undefined') {
            const now = dt.getDateTime();
            const duration = dt.getTimeDifference(startTime, now);

            variation.variation = convertToNumber(scraped); // '+0.18%' becomes 0.18
            variation.url = getURLend(url);

            console.log(`>> ${duration}s - Variation ${url}: ${variation.variation}`);

            allVariations.push(variation);
            process.send(allVariations);
          } else {
            console.log(`>> Variation ${url}: Undefined. Not added.`);
          }
        });

        next();
      }
    });
  } else {
    console.log('>> Downloads ended');
  }
});

function convertToNumber(str) {
  str.replace(/\+/g, '');
  str.replace(/%/g, '');
  return parseFloat(str);
}

function getURLend(str) {
  return str.split('/')[4];
}
