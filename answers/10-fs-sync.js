const { writeFileSync, readFileSync } = require('fs');
const path = require('node:path');
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');

writeFileSync(filePath, 'Sharks have been around longer than trees.\n'); 

writeFileSync(filePath, 'A day on Venus is longer than a year on Venus.\n', { flag: 'a' }); 

writeFileSync(filePath, 'Sloths can hold their breath longer than dolphins.\n', { flag: 'a' });

const fileContent = readFileSync(filePath, 'utf8');
console.log(fileContent);


