// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about the env where the program is being executed

console.log(__dirname); // prints path to current directory
setInterval(() => {
    console.log("Hello World");
}, 1000); // will print 'Hello World' every second