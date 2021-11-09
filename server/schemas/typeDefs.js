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
  }

  type Auth {
    token: ID
    user: User

  }

  type Query {
    getAllUsers: [User]
    getUserbyId: User
    getCourses: [Course]
    getMerch(name: String, description: String, image: String, price: Int, quantity: Int): [Merch]
    getMerchById(_id: ID!): Merch
    getPurchase(_id: ID!): Purchase
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String, email: String, password: String): Auth
    addCourseData(courseName: String, par: Int, courseRating: Float, slopeRating: Int): Course
    addPurchase(merch: [ID]!): Purchase
    updateMerch(_id: ID!, quantity: Int!): Merch
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;