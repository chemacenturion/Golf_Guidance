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

    scoreCardTemplate: {
        holeOne: {
            par: Number,
        },
        holeTwo: {
            par: Number,
        },
        holeThree: {
            par: Number,
        },
        holeFour: {
            par: Number,
        },
        holeFive: {
            par: Number,
        },
        holeSix: {
            par: Number,
        },
        holeSeven: {
            par: Number,
        },
        holeEight: {
            par: Number,
        },
        holeNine: {
            par: Number,
        },
        holeTen: {
            par: Number,
        },
        holeEleven: {
            par: Number,
        },
        holeTwelve: {
            par: Number,
        },
        holeThirteen: {
            par: Number,
        },
        holeFourteen: {
            par: Number,
        },
        holeFifteen: {
            par: Number,
        },
        holeSixteen: {
            par: Number,
        },
        holeSeventeen: {
            par: Number,
        },
        holeEighteen: {
            par: Number,
        }
    }

});

const Course = model('Course', courseSchema);

module.exports = Course;