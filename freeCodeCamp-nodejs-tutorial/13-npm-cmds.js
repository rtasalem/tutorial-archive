// npm - global command, comes with the node installation
// npm --version OR npm --v - you can use either of these commands to check which version of npm you have locally

// local dependency - use it only in this particular project
// local dependencies are most often used as there is seen to be less and less need for setting up global dependencies
// npm i <packageName>

// global dependency - use it on any project
// npm install -g <packageName> 
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about the project/packages)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// npm also creates the node_modules folder if it does not already exist

// PACKAGE.JSON
// have a look in the package.json file, you will see the 2 dependencies (lodash and bootstrap) that were both installed
// via the command: npm i <packageName>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);