// PATH MODULE

const path = require('path')

// shows what is used to separate the path 
console.log(path.sep)

// joining the full path to a specific file
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// extracting only the base of the path i.e. test.txt
const base = path.basename(filePath)
console.log(base)

// path.resolve returns the absolute path i.e. the full path to the specified folders
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)