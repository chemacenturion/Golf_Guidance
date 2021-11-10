import { gql } from '@apollo/client';

export const GET_COURSES = gql`
query getCourses {
  getCourses {
    courseName
    par
    courseRating
    slopeRating
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
}`
export const GET_MERCH = gql`
query getMerch {
  merch {
    _id
    name
    description
    image
    price
    quantity
  }
}`

export const GET_MERCH_BY_ID = gql`
query addedToCart($ID: String) {
  merchById(_id: $ID) {
    _id
    name
    description
    image 
    price
    quantity 
  }
}`