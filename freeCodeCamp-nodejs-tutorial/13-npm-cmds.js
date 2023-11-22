// NPM CMDS & GLOBAL + LOCAL DEPENDENCIES INSTALLATION

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
// via the command: npm i <packageName

// npm i <packageName> -D OR --save-dev (both of these will install a package as a dev dependency i.e. one that is not needed for production)
// npm i nodemon -D OR npm i nodemon --save-dev (nodemon is not needed for production therefore it was installed as a dev dependency)
// testing packages, linting, formatting etc. could all be added as dev dependencies rather than jamming them under dependencies

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('hello world');

// VERSION CONTROL - GIT
/* typically, the node_modules folder will be included in the .gitignore file which means they will not be pushed to the repo.
this means that whoever clones the repo will not also clone the node_modules folder that contains all the needed dependencies,
but this is not a problem, because after cloning the repo, simply open the terminal (make sure to be within the project itself)
and run the command npm install. npm will check what dependencies are listed in the package.json and install them automatically 
after running the command. This will also add in the package-lock.json file as well!
*/

/* global installation of packages can be done from the terminal itself without navigating to the desried folder,
you can then run the command in the integrated terminal in vs code and that command should now function as expected 

e.g. for this project, the terminal was opened and the following command entered: sudo npm install -g nodemon
and then in vs code's integrated terminal, the nodemon app.js command was now working */