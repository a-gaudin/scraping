"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');
const config_1 = require("../config");
const dt = require("./datetime");
function getFilepath(filename, addDate) {
    if (addDate) {
        filename += '_' + dt.getDateTime().dateHours;
    }
    return './csv/' + filename + '.csv';
}
function create(data, filename, addDate) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs.existsSync(config_1.csvFolderPath)) {
            fs.mkdirSync(config_1.csvFolderPath);
        }
        const filepath = getFilepath(filename, addDate);
        yield new ObjectsToCsv(data).toDisk(filepath);
    });
}
exports.create = create;
;
