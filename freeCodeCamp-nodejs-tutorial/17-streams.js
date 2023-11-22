// STREAMS - writable

// 4 types of streams in node: writable (writing data sequentially), readable (reading data sequentially), 
// duplex (reading and writing data sequentially), transform (modify while reading and writing)

/**
 * Below, the for loop sets the condition that starting from i = 0, increment i by 1 up until 10,000 and append this number to the end
 * of the phrase 'Hello World'. All of this is then placed inside of a text file called big.txt in the contents folder.
 */
const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
};

// STREAMS - readable

const { createReadStream } = require('fs');

// creating a new variable called stream, invoking the createReadStream method and passing in the path to the file
const stream = createReadStream('../content/big.txt', { highWaterMark: 900000, encoding: 'utf8' });

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
});