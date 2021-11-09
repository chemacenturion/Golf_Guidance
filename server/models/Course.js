const { model, Schema } = require('mongoose');


const courseSchema = new Schema({
    
    courseName: {
        type: String,
        required: true,
    },

    par: {
        type: Number,
        required: true,
    },

    courseRating: {
        type: Number,
        required: true,
    },

    slopeRating: {
        type: Number,
        required: true,
    }
});

const Course = model('Course', courseSchema);

module.exports = Course;