const express = require("express");
const { MongoClient } = require('mongodb');

const router = express.Router();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

router.post("/", async (req, res) => {
    await client.connect();
    console.log('Connected to the server');
    const db = client.db(dbName);
    const collection = db.collection('product');
    try {
        // Find all products in the collection
        const products = await collection.find().toArray();

        // Check if products are found
        if (products.length > 0) {
            console.log('all products:', products);
            res.json(products); 
        } else {
            console.log('no products found');
        }
    } catch (err) {
        console.error('Error getting products:', err);
    }finally {
        await client.close();
    }
});

module.exports = router;

