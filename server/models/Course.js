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
    },

    holeOnePar: {
        type: Number,
        required: true,
    },

    holeTwoPar: {
        type: Number,
        required: true,
    },

    holeThreePar: {
        type: Number,
        required: true,
    },

    holeFourPar: {
        type: Number,
        required: true,
    },

    holeFivePar: {
        type: Number,
        required: true,
    },

    holeSixPar: {
        type: Number,
        required: true,
    },

    holeSevenPar: {
        type: Number,
        required: true,
    },

    holeEightPar: {
        type: Number,
        required: true,
    },

    holeNinePar: {
        type: Number,
        required: true,
    },

    holeTenPar: {
        type: Number,
        required: true,
    },

    holeElevenPar: {
        type: Number,
        required: true,
    },

    holeTwelvePar: {
        type: Number,
        required: true,
    },

    holeThirteenPar: {
        type: Number,
        required: true,
    },

    holeFourteenPar: {
        type: Number,
        required: true,
    },

    holeFifteenPar: {
        type: Number,
        required: true,
    },

    holeSixteenPar: {
        type: Number,
        required: true,
    },

    holeSeventeenPar: {
        type: Number,
        required: true,
    },

    holeEighteenPar: {
        type: Number,
        required: true,
    },
});

const Course = model('Course', courseSchema);

module.exports = Course;