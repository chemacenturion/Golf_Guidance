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

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },

    scoreCardTemplate: {
    holeOne: {
        par: Number,
        // score: Number
    },
    holeTwo: {
        par: Number,
        // score: Number
    },
    holeThree: {
        par: Number,
        // score: Number
    },
    holeFour: {
        par: Number,
        // score: Number
    },
    holeFive: {
        par: Number,
        // score: Number
    },
    holeSix: {
        par: Number,
        // score: Number
    },
    holeSeven: {
        par: Number,
        // score: Number
    },
    holeEight: {
        par: Number,
        // score: Number
    },
    holeNine: {
        par: Number,
        // score: Number
    },
    holeTen: {
        par: Number,
        // score: Number
    },
    holeEleven: {
        par: Number,
        // score: Number
    },
    holeTwelve: {
        par: Number,
        // score: Number
    },
    holeThirteen: {
        par: Number,
        // score: Number
    },
    holeFourteen: {
        par: Number,
        // score: Number
    },
    holeFifteen: {
        par: Number,
        // score: Number
    },
    holeSixteen: {
        par: Number,
        // score: Number
    },
    holeSeventeen: {
        par: Number,
        // score: Number
    },
    holeEighteen: {
        par: Number,
        // score: Number
    }
    }

});

const Course = model('Course', courseSchema);

module.exports = Course;