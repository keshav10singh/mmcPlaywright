const xlsx = require('xlsx');
const path = require('path');

module.exports = {
  readExcelFile: function (filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    return data;
  }
};