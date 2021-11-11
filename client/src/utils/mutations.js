import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser(
  $username: String!, 
  $email: String!, 
  $password: String!
  ) {
  addUser(
    username: $username, 
    email: $email, 
    password: $password
    ) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_COURSE_DATA = gql`
mutation addCourseData(
  $courseName: String!,
  $par: Int!,
  $courseRating: Float!,
  $slopeRating: Int!,
  $holeOnePar: Int!,
  $holeTwoPar: Int!,
  $holeThreePar: Int!,
  $holeFourPar: Int!,
  $holeFivePar: Int!,
  $holeSixPar: Int!,
  $holeSevenPar: Int!,
  $holeEightPar: Int!,
  $holeNinePar: Int!,
  $holeTenPar: Int!,
  $holeElevenPar: Int!,
  $holeTwelvePar: Int!,
  $holeThirteenPar: Int!,
  $holeFourteenPar: Int!,
  $holeFifteenPar: Int!,
  $holeSixteenPar: Int!,
  $holeSeventeenPar: Int!,
  $holeEighteenPar: Int!,
) {
  addCourseData(
    courseName: $courseName,
    par: $par,
    courseRating: $courseRating,
    slopeRating: $slopeRating,
    holeOnePar: $holeOnePar,
    holeTwoPar: $holeTwoPar,
    holeThreePar: $holeThreePar,
    holeFourPar: $holeFourPar,
    holeFivePar: $holeFivePar,
    holeSixPar: $holeSixPar,
    holeSevenPar: $holeSevenPar,
    holeEightPar: $holeEightPar,
    holeNinePar: $holeNinePar,
    holeTenPar: $holeTenPar,
    holeElevenPar: $holeElevenPar,
    holeTwelvePar: $holeTwelvePar,
    holeThirteenPar: $holeThirteenPar,
    holeFourteenPar: $holeFourteenPar,
    holeFifteenPar: $holeFifteenPar,
    holeSixteenPar: $holeSixteenPar,
    holeSeventeenPar: $holeSeventeenPar,
    holeEighteenPar: $holeEighteenPar
  )  {
    courseName
    par
    slopeRating
    courseRating
    holeOnePar
    holeTwoPar
    holeThreePar
    holeFourPar
    holeFivePar
    holeSixPar
    holeSevenPar
    holeEightPar
    holeNinePar
    holeTenPar
    holeElevenPar
    holeTwelvePar
    holeThirteenPar
    holeFourteenPar
    holeFifteenPar
    holeSixteenPar
    holeSeventeenPar
    holeEighteenPar
  }
}
`;

export const REMOVE_COURSE_DATA = gql`
 mutation removeCourseData($courseId: ID!) {
   removeCourseData(courseId: $courseId){
     _id
     courseName
   }
 }
`;