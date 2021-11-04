const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getUserbyId: User
    getCourseData: [Course]
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

  type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    addCourseData(courseName: String, holeCount: Int, par: Int, courseRating: Int, slopeRating: Int): Course
  }
`;

module.exports = typeDefs;