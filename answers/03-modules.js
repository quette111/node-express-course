const { nameArray } = require("./04-names.js");
const utils = require("./05-utils.js");
const altFlav  = require("./06-alternative-flavor.js");

//******comment mindGrenade variable out to look at terminal output******
const mindGrenade = require("./07-mind-grenade.js"); 

const os = require("./08-os-module.js");
const pathTo = require("./09-path-module.js");
const fsSync = require('./10-fs-sync.js');

console.log(`${nameArray[0]} ${nameArray[1]} is friends with ${nameArray[2]}`)

utils.notFriends(nameArray[2], nameArray[0])

console.log(altFlav.greeting + ', specifically ' + altFlav.names[1])