
const EventEmitter = require("events");
const emitter = new EventEmitter();
const greeting = "QUETTE-MADE-AN-EVENT";

let index = 0;

function interval() {
    function typeEffect() {
        if (index < greeting.length) {
            console.clear();
            console.log(greeting.slice(0, index + 1));
            index++;
            setTimeout(typeEffect, 70);
        }
    }
    typeEffect();
}

emitter.on('firstEvent', interval);
emitter.emit('firstEvent');
