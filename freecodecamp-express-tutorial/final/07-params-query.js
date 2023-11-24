const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// --------------------------

// Rana's code
const express = require('express');
const app1 = express();
const { products } = require('./data.js');

app1.get('/', (req, res) => {
  // res.json(products); // will display the information as a JSON object 
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

/**
 * Essentially, while there is a resource known as /api/products that returns an array of all the products, if a user wishes to know
 * the description of the product then they must look for the specific product itself.
 */
app1.get('/api/products', (req, res) => {
  /** being selective about what is being sent back i.e. not all the product details are provided for this GET request, 
   * rather the description is intentionally not sent back as this is being saved for a separate GET request where the user
   * would click on the product itself to see the full details.
   */
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  })
  res.json(newProducts);
});

// the below GET request will return the product after specifying the id of the desired product
app1.get('/api/products/:productID', (req, res) => { // no hard coding for the id here
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  /** By having Number(productID) we make the API more response as now in the /api/product/:productID url, we can replace :productID
   * with whichever id in order to get the full information for that specific product. 
   */
  const singleProduct = products.find((product) => product.id === Number(productID));
  if (!singleProduct) {
    return res.status(404).send('Product does not exist!');
  }
  return res.json(singleProduct)
  // console.log(singleProduct);
  // res.json(singleProduct);
});

app1.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app1.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matching your search :(')
    // not that below the request was truly successful, but if the product does not exist in the array, then it will return an
    // empty array for the user, but again, THIS DOES NOT MEAN the request wasn't successful
    return res.status(200).json({ success: true, data: [] });
    // above, the return keyword MUST be included, without it JS will become confused and assume you are trying to send more than one response for a request when there can only be a single response per request
    // using the return keyword to also return from the callback function
  }
  res.status(200).json(sortedProducts);
  res.send('hello world');
});

app1.listen(4000, () => {
  console.log("Server listening on port 4000...");
});
