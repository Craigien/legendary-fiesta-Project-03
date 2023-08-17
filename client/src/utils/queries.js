import { gql } from '@apollo/client';

// Get all users from database
export const QUERY_USER = gql`
  query allUsers {
    user {
      _id
      email
    }
  }
`;

// Get one user from database
export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      email
    }
  }
`;

// Get the currently logged in user from database
export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;

// Get all vehicles from database
export const QUERY_VEHICLES = gql`
  query Cars {
    cars {
      _id
      year
      make
      model
      vehicleType
      condition
      price
      monthlyPayment
      mileage
      color
      image
    }
  }
`;

// Get all vehicles based on vehicle type from database
export const QUERY_VEHICLE_TYPE = gql`
query CarTypes($type: String!) {
  carTypes(type: $type) {
    _id
    year
    make
    model
    vehicleType
    condition
    price
    monthlyPayment
    mileage
    color
    image
  }
}
`;

// Get single vehicle from database
export const QUERY_SINGLE_VEHICLE = gql`
query Car($carId: ID!) {
  car(carId: $carId) {
    _id
    year
    make
    model
    vehicleType
    condition
    price
    monthlyPayment
    mileage
    color
    image
  }
}
`;

// Get all appointments for specified user from database
export const QUERY_APPOINTMENTS_BY_USER = gql`
query AppointmentsByUser($userId: String!) {
  appointmentsByUser(userId: $userId) {
    _id
    carId
    userId
    appointmentDate
    appointmentTime
    comments
  }
}
`;