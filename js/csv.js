const ObjectsToCsv = require('objects-to-csv');

const dt = require('./datetime.js');

function getFilepath(filename, addDate) {
  if (addDate) { filename += '_' + dt.getDateTime().dateHours; }
  return './csv/' + filename + '.csv';
}

async function create(data, filename, addDate) {
  const filepath = getFilepath(filename, addDate);
  await new ObjectsToCsv(data).toDisk(filepath);
};

module.exports.create = create;
