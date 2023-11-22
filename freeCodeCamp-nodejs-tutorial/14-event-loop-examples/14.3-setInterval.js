setInterval(() => {
    console.log('hello world');
}, 2000); // asynchronous

console.log('I will run first'); // synchronous

// process stays alive unless
// kill process control + c
// unexpected error

/**
 * Note that when running the above code, there is an interval of 2 seconds which means after the immediate code block has been 
 * executed, the callback will be executed every two seconds without stopping, therefore ctrl + c is needed to kill the process
 */