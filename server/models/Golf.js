const { Schema } = require('mongoose');


const golfSchema = new Schema({
    hole: 
        {
        type: Number
        },
    
    par: {
        type: Number
    },

    strokes: {
        type: Number
    },

});



module.exports = golfSchema;