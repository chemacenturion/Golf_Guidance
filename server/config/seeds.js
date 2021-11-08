const db = require('./connection');

const { Merch, Purchase } = require('../models');

db.once('open', async () => {
    await Merch.deleteMany();

    await Merch.create({
        name: "Hat",
        description: "Hat",
        image: "IMG",
        price: 10,
        quantity: 2

    });

    await Merch.create({
        name: "Shirt",
        description: "A Shirt",
        image: "IMG",
        price: 12,
        quantity: 5

    });

    await Merch.create({
        name: "Mug",
        description: "A mug",
        image: "IMG",
        price: 5,
        quantity: 3

    })
    
    process.exit(); 
});