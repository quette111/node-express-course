const path = require('node:path');

const pathTo = (...segments) => {
  return path.join(...segments)
}

console.log(pathTo(__dirname, 'content', 'subfolder', 'test.txt'))
