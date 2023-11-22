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
// NOTE WHEN RUNNING THIS PROGRAM - change the above path to './content/big.txt' i.e. remove the extra dot at the start which was put there intentionally to test the program's functionality

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
});

// -----------------------------

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res); // pushes the read stream into the write stream because if we have the ability to read data in chunks then we also have the ability to write data in chunks
    })
    fileStream.on('error', (err) => {
        res.end(err);
    });
}).listen(4000);

// the above is making the big.txt file readable on port 4000 i.e. enter localhost:4000 into browser and you should see the big.txt file printed out