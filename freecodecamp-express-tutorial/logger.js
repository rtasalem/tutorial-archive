const logger = (req, res, next) => { // must reference the logger in the middleware function (see line 19 as an example)
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};

module.exports = logger;