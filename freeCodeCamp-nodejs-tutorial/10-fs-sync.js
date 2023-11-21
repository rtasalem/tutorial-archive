// FS Module - Sync
// Reading and writing files using Node.js

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8') // must include the utf8 so node knows how to encode
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })
console.log('done with this task');
console.log('starting next task');

// within the result-sync.txt file you can try to change what is already written there, but Node will override your changes