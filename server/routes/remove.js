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
        // product id to delete
        const productId = req.body._id; 

        // Check if the product exists
        const product = await collection.findOne({ _id: new ObjectId(productId) });
        if (!product) {
            console.log('cant find product', productId);
        }else{
            // Delete the product
            const result = await collection.deleteMany({ _id: new ObjectId(productId)});
            if (result.deletedCount > 0) {
                console.log('successfully deleted the product', productId);
            } else {
                console.log('product not found.');
            }
        }

        
    } catch (err) {
        console.error('error deleting product:', err);
    }finally {
        await client.close();
    }
});

module.exports = router;

