const { createReadStream } = require('fs');

const stream = createReadStream('/Users/edwardmarquettewilhite/Desktop/01-node-tutorial/content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 200
})

let data = '';
stream.on('data', function (result) {
    data += result
    console.log(result)
}).on('end', function () {
    console.log(data)
})


stream.on('error', (err) => console.log(err))
