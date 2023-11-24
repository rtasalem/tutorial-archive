const express = require('express');
const router = express.Router();
// const app = express();

router.post('/', (req, res) => { // changed /login to /
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    };
    res.status(401).send('Please provide credentials');
});

module.exports = router;