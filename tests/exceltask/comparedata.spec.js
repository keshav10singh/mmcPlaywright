const fs = require('fs');
const { test } = require('@playwright/test');

test('Compare arrays from exceldata.spec.js and readexcel.spec.js', async ({}) => {
  // Read arrays from JSON files
  const excelDataArray = JSON.parse(fs.readFileSync('data/excelDataArray.json', 'utf8'));
  const readExcelDataArray1 = JSON.parse(fs.readFileSync('data/readExcelDataArray1.json', 'utf8'));
  // Print both arrays Before Compare
  console.log(' excelDataArray:', excelDataArray);
  console.log('readExcelDataArray1:', readExcelDataArray1);

  // Function to normalize array elements by converting to lowercase and removing special characters
  const normalizeArray = (arr) => {
    return arr.map(item => 
      item.toString().toLowerCase().replace(/[^a-z0-9]/g, '')
    );
  };

  
  // Normalize both arrays
  const normalizedExcelDataArray = normalizeArray(excelDataArray).sort();
  const normalizedReadExcelDataArray1 = normalizeArray(readExcelDataArray1).sort();

  // Print both normalize arrays Before Compare
  console.log(' normalize sorted excelDataArray:', normalizedExcelDataArray);
  console.log('normalize sorted readExcelDataArray1:', normalizedReadExcelDataArray1);

  // Compare the normalized arrays
  const arraysAreEqual = JSON.stringify(normalizedExcelDataArray) === JSON.stringify(normalizedReadExcelDataArray1);

  // Log the result
  if (arraysAreEqual) {
    console.log('The arrays are equal.');
  } else {
    console.log('The arrays are not equal.');
  }




  /* Compare the arrays
  //const arraysAreEqual = JSON.stringify(excelDataArray) === JSON.stringify(readExcelDataArray1);
  
  // Function to normalize array elements by converting to lowercase and removing special characters
  const normalizeArray = (arr) => {
    return arr.map(item => 
      item.toString().toLowerCase().replace(/[^a-z0-9]/g, '')
    );
  };

  // Normalize both arrays
  const normalizedExcelDataArray = normalizeArray(excelDataArray);
  const normalizedReadExcelDataArray1 = normalizeArray(readExcelDataArray1);

  // Compare the normalized arrays
  const arraysAreEqual = JSON.stringify(normalizedExcelDataArray) === JSON.stringify(normalizedReadExcelDataArray1);
 
  // Sort both arrays
  normalizedExcelDataArray.sort();
  normalizedReadExcelDataArray1.sort();

  // Print both arrays
  console.log('Normalized and sorted excelDataArray:', normalizedExcelDataArray);
  console.log('Normalized and sorted readExcelDataArray1:', normalizedReadExcelDataArray1);

  // Log the result
  if (arraysAreEqual) {
    console.log('The arrays are equal.');
  } else {
    console.log('The arrays are not equal.');
  }
 
  function compareArrays(excelDataArray, readExcelDataArray1) {
    // Check if both arrays have the same length
    if (excelDataArray.length !== readExcelDataArray1.length) {
      return false;
    }
  
  
    // Iterate through both arrays and compare corresponding elements
    for (let i = 0; i < excelDataArray.length; i++) {
      if (excelDataArray[i] !== readExcelDataArray1[i]) {
        return false;
      }
    }
  
    // If no differences found, the arrays are equal
    return true;
  }
  
  
  const areArraysEqual = compareArrays(excelDataArray, readExcelDataArray1);
  console.log("Arrays are equal:", areArraysEqual);
*/
});