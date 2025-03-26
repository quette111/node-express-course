const { writeFile, readFile } = require('fs').promises;
const path = require('node:path');

const filePath = path.join(__dirname, 'temporary', 'temp.txt');


writeFile(filePath, 'HELLO FROM MARQUETTE.\n').then(() => {
    console.log('uno')
    return writeFile(filePath, ':-))))))))))\n', { flag: 'a' });


}).then(() => {
    console.log('Second .then line sent')
 console.log('Third .then line sent')
   return writeFile(filePath, 'GOODBYE FROM MARQUETTE\n', { flag: 'a' });
   

}).then(() => {
 
   return readFile(filePath, 'utf8')
   

}).then((data)=>{
    
  console.log(data)

}).catch(() => {

    console.log("An error occurred", error)
})