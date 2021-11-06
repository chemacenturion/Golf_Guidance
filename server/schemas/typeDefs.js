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

  type Order {
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
  }

  type Course {
    _id: ID
    courseName: String,
    holeCount: Int,
    par: Int,
    courseRating: Int,
    slopeRating: Int
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
    addCourseData(courseName: String, holeCount: Int, par: Int, courseRating: Int, slopeRating: Int): Course
    addOrder(merch: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Merch
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;