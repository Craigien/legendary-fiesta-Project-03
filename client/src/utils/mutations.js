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
mutation AddAppointment($carId: ID!, $userId: ID!, $appointmentDate: String!, $appointmentTime: String!, $comments: String!) {
  addAppointment(carId: $carId, userId: $userId, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime, comments: $comments) {
    _id
    carId
    userId
    appointmentDate
    appointmentTime
    comments
  }
}
`;

export const UPDATE_APPOINTMENT = gql`
mutation UpdateAppointment($appointmentId: ID!, $appointmentDate: String, $appointmentTime: String) {
  updateAppointment(appointmentId: $appointmentId, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime) {
    _id
    appointmentDate
    appointmentTime
  }
}
`;

export const DELETE_APPOINTMENT = gql`
mutation DeleteAppointment($appointmentId: ID!) {
  deleteAppointment(appointmentId: $appointmentId) {
    _id
  }
}
`;