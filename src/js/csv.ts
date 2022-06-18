const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');

import { csvFolderPath } from "../config";
import * as dt from "./datetime"

function getFilepath(filename: string, addDate: boolean) {
  if (addDate) { filename += '_' + dt.getDateTime().dateHours; }
  return './csv/' + filename + '.csv';
}

async function create(data: any[], filename: string, addDate: boolean) {
  if (!fs.existsSync(csvFolderPath)){
    fs.mkdirSync(csvFolderPath);
  }

  const filepath = getFilepath(filename, addDate);
  await new ObjectsToCsv(data).toDisk(filepath);
};

export { create };
