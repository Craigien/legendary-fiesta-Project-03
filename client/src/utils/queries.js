import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query allUsers {
    user {
      _id
      email
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;

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