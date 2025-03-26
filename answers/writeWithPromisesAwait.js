const { writeFile, readFile } = require('fs').promises;
const path = require('node:path');

const filePath = path.join(__dirname, 'temporary', 'temp.txt');

const writer = async () => {
    try {

        await writeFile(filePath, 'English: Love to code.\n');
        console.log('First line sent')

        await writeFile(filePath, 'Spanish: Amor por programar.\n', { flag: 'a' });
        console.log('Second line sent')

        await writeFile(filePath, 'Binary: 01101100 01101111 \n 01110110 01100101 \n 00100000 01110100 \n 01101111 00100000 \n 01100011 01101111 \n 01100100 01100101.\n', { flag: 'a' });
        console.log('Third line sent')

        console.log(`Data sent to file: ${filePath}...`)

    } catch (error) {
        console.log('An error occured while writing file...', error)
    }
};

const reader = async () => {
    try {
        await readFile(filePath, 'utf8');
        console.log(`Reading file...`)
    } catch (error) {
        console.log('An error has occurred while reading the file', error)
    }
}

const readWrite = async () => {
    try {
        await reader()
        console.log('Function: reader() reached')
        await writer()
        console.log('Function: writer() reached')
    } catch (error) {
        console.log('Error occurred', error)
    }
}

readWrite()

