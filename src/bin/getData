const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
const { builtinModules } = require('module');

const FILE_PATH = path.join(__dirname, '../data/data.xlsx');

var WB = XLSX.readFile(FILE_PATH);

const GetSheet = (sheetName, headers = ["Question", "1", "2", "3", "4", "Correct", "Hint"]) => {
    return XLSX.utils.sheet_to_json(XLSX.readFile(FILE_PATH).Sheets[sheetName], { header: headers });
}

const WatchFile = (file = FILE_PATH) => {
    fs.watch(file, (eventType) => {
        if (eventType === "change") {
            WB = XLSX.readFile(file);

            console.log(`${file} has been changed`);
        }
    })
};

module.exports.FILE_PATH = FILE_PATH;
module.exports.WB = WB;

module.exports.GetSheet = GetSheet;
module.exports.WatchFile = WatchFile;

module.exports = {
    FILE_PATH,
    WB,

    GetSheet,
    WatchFile
}