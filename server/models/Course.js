const { model, Schema } = require('mongoose');


const courseSchema = new Schema({
    
    courseName: {
        type: String,
        required: true,
    },

    holeCount: {
        type: Number,
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
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Course = model('Course', courseSchema);

module.exports = Course;