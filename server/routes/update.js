const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');

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
        const productId = req.body._id;  
        console.log(productId);
        console.log(req.body);
        const updatedValues = {
            $set: {
                name: req.body.name,  
                price: req.body.price,
                description: req.body.description,
                units: req.body.units
            }
        };


        // Update the product with the specified id
        const result = await collection.updateOne(
            { _id: new ObjectId(productId) },
            updatedValues       
        );

        if (result.matchedCount > 0) {
            console.log('Successfully updated the product');
        } else {
            console.log('couldnt find the product');
        }


    } catch (err) {
        console.error('error updating product:', err);
    }finally {
        await client.close();
    }
});

module.exports = router;
