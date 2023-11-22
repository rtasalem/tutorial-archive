const { readFile } = require('fs');

console.log('started first task'); // this line will be run first 

readFile('./content/first.txt', 'utf8', (err, result) => { // this line will be run third
    if (err) {
        console.log(err);
        return;
    };
    console.log(result);
    console.log('completed first task'); // this line will be run last
});

console.log('starting next task'); // this line will be run second

// because of the event loop, the immediate code is run first and only once these have been executed is the callback then
// executed to offload time consuming tasks