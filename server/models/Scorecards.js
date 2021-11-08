const { model, Schema } = require('mongoose');


const scorecardSchema = new Schema({
    
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
        score: ""
    },
    holeTwo: {
        par: Number,
        score: ""
    },
    holeThree: {
        par: Number,
        score: ""
    },
    holeFour: {
        par: Number,
        score: ""
    },
    holeFive: {
        par: Number,
        score: ""
    },
    holeSix: {
        par: Number,
        score: ""
    },
    holeSeven: {
        par: Number,
        score: ""
    },
    holeEight: {
        par: Number,
        score: ""
    },
    holeNine: {
        par: Number,
        score: ""
    },
    holeTen: {
        par: Number,
        score: ""
    },
    holeEleven: {
        par: Number,
        score: ""
    },
    holeTwelve: {
        par: Number,
        score: ""
    },
    holeThirteen: {
        par: Number,
        score: ""
    },
    holeFourteen: {
        par: Number,
        score: ""
    },
    holeFifteen: {
        par: Number,
        score: ""
    },
    holeSixteen: {
        par: Number,
        score: ""
    },
    holeSeventeen: {
        par: Number,
        score: ""
    },
    holeEighteen: {
        par: Number,
        score: ""
    }
    }

});

const Scorecard = model('Scorecard', scorecardSchema);

module.exports = Scorecard;