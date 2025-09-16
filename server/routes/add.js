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

        // Create 3 product items
        const products = {
                id: parseInt(req.body.id),
                name: req.body.name,
                price: parseInt(req.body.price),
                description: req.body.description,
                units: parseInt(req.body.units)
            }
        const product = await collection.findOne({ id: products.id });
        if(!product){
            // Insert the products into the collection
            const result = await collection.insertOne(products);
            console.log(result);
            console.log('Products inserted');
        }else{
            console.log("used id");
            console.log(products);
        }
    } catch (err) {
        console.error('Error inserting products:', err);
    }finally {
        await client.close();
    }
});

module.exports = router;
