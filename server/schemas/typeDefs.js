const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Merch {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Purchase {
    _id: ID
    purchaseDate: String
    products: [Merch]
  }

  type Checkout {
    session: ID
  }

  type User {
    _id: ID
    username: String
    email: String
    # purchases: [Purchase]
    # scorecards: [Scorecard]
  }

  type Scorecard {
    _id: ID
    courseName: String
    par: Int
    courseRating: Int
    slopeRating: Int
    # scoreCardTemplate: {
    #   holeOne: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeTwo: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeThree: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeFour: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeFive: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeSix: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeSeven: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeEight: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeNine: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeTen: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeEleven: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeTwelve: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeThirteen: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeFourteen: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeFifteen: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeSixteen: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeSeventeen: {
    #       par: Number,
    #       score: Number
    #   },
    #   holeEighteen: {
    #       par: Number,
    #       score: Number
    #   }
    # }
  }

  type Course {
    _id: ID
    courseName: String
    par: Int
    courseRating: Int
    slopeRating: Int
    # scoreCardTemplate: {
    #   holeOne: {
    #       par: Number,
    #   },
    #   holeTwo: {
    #       par: Number,
    #   },
    #   holeThree: {
    #       par: Number,
    #   },
    #   holeFour: {
    #       par: Number,
    #   },
    #   holeFive: {
    #       par: Number,
    #   },
    #   holeSix: {
    #       par: Number,
    #   },
    #   holeSeven: {
    #       par: Number,
    #   },
    #   holeEight: {
    #       par: Number,
    #   },
    #   holeNine: {
    #       par: Number,
    #   },
    #   holeTen: {
    #       par: Number,
    #   },
    #   holeEleven: {
    #       par: Number,
    #   },
    #   holeTwelve: {
    #       par: Number,
    #   },
    #   holeThirteen: {
    #       par: Number,
    #   },
    #   holeFourteen: {
    #       par: Number,
    #   },
    #   holeFifteen: {
    #       par: Number,
    #   },
    #   holeSixteen: {
    #       par: Number,
    #   },
    #   holeSeventeen: {
    #       par: Number,
    #   },
    #   holeEighteen: {
    #       par: Number,
    #   }
    # }
  }

  type Auth {
    token: ID
    user: User

  }

  type Query {
    getAllUsers: [User]
    getUserbyId: User
    getCourseData: [Course]
    getMerch(name: String, description: String, image: String, price: Int, quantity: Int): [Merch]
    getMerchById(_id: ID!): Merch
    getPurchase(_id: ID!): Purchase
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String, email: String, password: String): Auth
    addCourseData(courseName: String, par: Int, courseRating: Int, slopeRating: Int,): Course
    addPurchase(merch: [ID]!): Purchase
    updateMerch(_id: ID!, quantity: Int!): Merch
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;