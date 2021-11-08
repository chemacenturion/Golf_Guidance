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
    purchases: [Purchase]
    scorecards: [Scorecard]
  }

  type Scorecard {
    
  }

  type Course {
    _id: ID
    courseName: String
    par: Int
    courseRating: Int
    slopeRating: Int
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

  type Auth {
    token: ID
    user: User

  }

  type Query {
    getAllUsers: [User]
    getUserbyId: User
    getCourseData: [Course]
    getMerch(name: String, description: String, image: String, price: Int, quantity: Int): [Merch]
    getProductById(_id: ID!): Merch
    getOrder(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String, email: String, password: String): Auth
    addCourseData(courseName: String, par: Int, courseRating: Int, slopeRating: Int,): Course
    addOrder(merch: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Merch
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;