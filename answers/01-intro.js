const readline = require('node:readline'); //found after a little research 

const greeting = 'Hello, this is my first Node.js program!';
const correct = 'You guessed right!';
const incorrect = 'You guessed wrong :-(';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(greeting);

rl.question('Guess a number: ', (number) => {
  if (number > 25) {
    console.log(`${correct}, I was looking for any number over 25 and you guessed ${number}`);
  } else {
    console.log(`${incorrect}, I was looking for any number over 25 and you guessed ${number}`);
  }


  rl.close();
});
