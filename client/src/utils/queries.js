import { gql } from '@apollo/client';

export const GET_ME = gql`
query golfer {
    _id
    username
    email
    golferData {
     hole
     par
     strokes
    }
  }`;
