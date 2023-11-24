const authorise = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3 };
        next();
    } else {
        res.status(401).send('unauthorised');
    }
};
// you'll find that with the above, 'unauthorised' will show for the / path i.e. the home page as a resource is no longer accessible to us
// instead, to acces the hom page, you would need to enter'?user=john' at the end of the path in order to access the home page as john is an 
// user and can access that resource

// notice as well that using the above will apply to all the URL paths previously set up e.g. /, /about, /api/items, /api/products
// because we have imported the authorise functionality this is an example of multiple middleware functions operating together
// to form an express server

module.exports = authorise;