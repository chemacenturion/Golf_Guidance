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

  type Course {
    _id: ID
    courseName: String
    par: Int
    courseRating: Float
    slopeRating: Int
    holeOnePar: Int
    holeTwoPar: Int
    holeThreePar: Int
    holeFourPar: Int
    holeFivePar: Int
    holeSixPar: Int
    holeSevenPar: Int
    holeEightPar: Int
    holeNinePar: Int
    holeTenPar: Int
    holeElevenPar: Int
    holeTwelvePar: Int
    holeThirteenPar: Int
    holeFourteenPar: Int
    holeFifteenPar: Int
    holeSixteenPar: Int
    holeSeventeenPar: Int
    holeEighteenPar: Int
  }

  type Auth {
    token: ID
    user: User

  }

  type Query {
    getAllUsers: [User]
    getUserbyId: User
    getCoursebyId: Course
    getCourses: [Course]
    merch(name: String, description: String, image: String, price: Int, quantity: Int): [Merch]
    merchById(_id: String): Merch
    getPurchase(_id: ID!): Purchase
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addMerch(name: String, description: String, image: String, price: Int, quantity: Int): Merch
    addUser(username: String, email: String, password: String): Auth
    addCourseData(
      courseName: String, 
      par: Int, 
      courseRating: Float, 
      slopeRating: Int,
      holeOnePar: Int,
      holeTwoPar: Int,
      holeThreePar: Int,
      holeFourPar: Int,
      holeFivePar: Int,
      holeSixPar: Int,
      holeSevenPar: Int,
      holeEightPar: Int,
      holeNinePar: Int,
      holeTenPar: Int,
      holeElevenPar: Int,
      holeTwelvePar: Int,
      holeThirteenPar: Int,
      holeFourteenPar: Int,
      holeFifteenPar: Int,
      holeSixteenPar: Int,
      holeSeventeenPar: Int,
      holeEighteenPar: Int
      ): Course
    addPurchase(merch: [ID]!): Purchase
    updateMerch(_id: ID!, quantity: Int!): Merch
    login(email: String!, password: String!): Auth
    removeCourseData(courseId: ID!): Course
    
  }
`;

module.exports = typeDefs;