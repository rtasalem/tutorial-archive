
console.log('first');

setTimeout(() => {
    console.log('second');
}, 0);

console.log('third');

// after running nodemon app.js, you'll notice that the order is first, third, then second
// this is because the second task is an asynchronous code which is offloaded by the event loop, so the first two immediate
// blocks of code are executed first

// all synchronous code is completed first before asynchronous