const express = require('express')
const router = express.Router()
const product = require('../models/product')





module.exports = router



























// const express = require('express');
// const router = express.Router();
// const Product = require('../models/product');


// module.exports = router;






// / Route to create a new product
// router.post('/product', async (req, res) => {
//   try {
//     // Assuming productData is sent in the request body
//     const productData = req.body;

//     // Create a new instance of the Product model
//     const newProduct = new Product(productData);

//     // Save the product to the database
//     const savedProduct = await newProduct.save();

//     // Respond with the saved product object
//     console.log('Product Created:', savedProduct);
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     // Handle errors
//     console.error('Error creating product:', err);
//     res.status(500).json({ error: 'Error creating product' });
//   }
// });
