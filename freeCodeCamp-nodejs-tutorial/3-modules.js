// Modules - modules are encapsulated code (only share the absolute bare minimum)
// CommonJS - every file is a module (by default)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-gren');
// console.log(names);

// below are different ways of inserting names into the sayHi method:
sayHi('susan');
sayHi(names.john); // possible to call the names because of line 3
sayHi(names.peter); // same as above line