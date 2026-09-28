//CommonJS, every file is module (by default)
//modules - Encasulated code (only share minimum)
const names = require('./4_names');
const sayHello = require('./5-utils');
const data = require('./6_alternative_flavour');
require('./7_mind_grenade');

console.log(data);
sayHello('susan');
sayHello(names.john);
sayHello(names.peter);
