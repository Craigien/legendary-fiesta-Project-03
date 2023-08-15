import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
mutation AddAppointment($carId: ID!, $userId: ID!, $appointmentType: String!, $appointmentDate: String!, $appointmentTime: String!, $comments: String!) {
  addAppointment(carId: $carId, userId: $userId, appointmentType: $appointmentType, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime, comments: $comments) {
    _id
    carId
    userId
    appointmentType
    appointmentDate
    appointmentTime
    comments
  }
}
`;