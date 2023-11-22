// ASYNC PATTERNS - BLOCKING CODE

/**
 * E.g. nested for loop - set up your code asynchronously so that you are not blocking other users from accessing any resources.
 * Remember that asynchronous code is set up so that it is offloaded by the event loop. Only when the data is ready is the asynchronous
 * code invoked.
 */

// ASYNC PATTERS - SETUP PROMISES

/**
 * Async needs 3 parameters - the path, the encoder, and the callback itself. 
 */

const { readFile, writeFile } = require('fs').promises; // using .promises at the end eliminates the need to create the readFilePromise and the writeFilePromise
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-gren.txt', `THIS IS AWESOME: ${first} ${second}, {flag: a}`);
        console.log(first, second)
    } catch (error) {
        console.log(error);
    };
};

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));