const express = require('express');
const app = express();
const { products } = require('./data.js');

app.get('/', (req, res) => {
    // res.json(products); // will display the information as a JSON object 
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    /** being selective about what is being sent back i.e. not all the product details are provided for this GET request, 
     * rather the description is intentionally not sent back as this is being saved for a separate GET request where the user
     * would click on the product itself to see the full details.
     */
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts);
})

app.listen(4000, () => {
    console.log("Server listening on port 4000...");
});