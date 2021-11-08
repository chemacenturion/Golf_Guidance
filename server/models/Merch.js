const { model, Schema } = require('mongoose');


const merchSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        
    },

    image: {
        type: String,
    },

    price: {
        type: Number,
        required: true,
        min: 0.99
    },

    quantity: {
        type: Number,
        min: 0,
        default: 0
    },

    
});

const Merch = model('Merch', merchSchema);

module.exports = Merch;