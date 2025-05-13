const { test } = require('@playwright/test');
const XLSX = require('xlsx');
const fs = require('fs');


test.describe('Excel Test',()=>{

    test.beforeEach('Read Excel data', async ({ page },testInfo) => {
        testInfo.setTimeout(testInfo.timeout + 60000);
    });
test('Read Excel file and extract data', async ({}) => {
  // Load the workbook
  const workbook = XLSX.readFile('data/2025_DGE_en_CA-3.xlsx');
  
  // Select the sheet named "Market Models"
  const worksheet = workbook.Sheets['Market Models'];
  
  // Read the data from the specified cells
 /* const cell4 = worksheet['B4'].v;
  const cell5 = worksheet['B5'].v;
  const cell6 = worksheet['B6'].v;
  const cell7 = worksheet['B7'].v;
  const cell8 = worksheet['B8'].v;
  const cell9 = worksheet['B9'].v;
  const cell10 = worksheet['B10'].v;*/
  
  // Store the values in an array
  //const dataArray = [cell4, cell5, cell6, cell7, cell8, cell9, cell10];

  // Initialize an array to store the values
  const dataArray = [];
  
    // Initialize the starting row
    let row = 4;

    // Loop to read cells from B4 until the next empty cell
  while (true) {
    const cellAddress = `B${row}`;
    const cell = worksheet[cellAddress];
    
    // Check if the cell is empty
    if (!cell || cell.v === undefined || cell.v === null || cell.v === '') {
      break;
    }
    
    // Add the cell value to the dataArray
    dataArray.push(cell.v);
    
    // Move to the next row
    row++;
  }
  

  // Log the array to verify the values
  console.log(dataArray);

  // Store the values in an array
  //const readExcelDataArray = [cell4, cell5,cell6,cell7,cell8,cell9,cell10];

  
  // Write array to a JSON file
 // fs.writeFileSync('data/readExcelDataArray1.json', JSON.stringify(readExcelDataArray));
 fs.writeFileSync('data/readExcelDataArray1.json', JSON.stringify(dataArray));

});
});