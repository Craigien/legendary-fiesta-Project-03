const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Car {
    _id: ID
    year: String
    make: String
    model: String
    vehicleType: String
    condition: String
    price: Int
    monthlyPayment: Int
    mileage: Int
    color: String
    image: String
  }

  type Appointment {
    _id: ID
    carID: ID
    userID: ID
    appointmentType: String
    serviceType: String
    appointmentDate: Date
    appointmentTime: String
    comments: String
  }

  type User {
    _id: ID
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    cars: [Car]
    car(carId: ID!): Car
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment(appointmentId: ID!, carId: ID!, userId: ID!, appointmentType: String!,appointmentDate: Date!, appointmentTime: String!, comments: String!): Appointment
    updateAppointment(appointmentId: ID!, appointmentDate: Date!, appointmentTime: String!): Appointment
    deleteAppointment(appointmentId: ID!): Appointment
    addServiceAppointment(appointmentId: ID!, carId: ID!, userId: ID!, appointmentType: String!, serviceType: String!, appointmentDate: Date!, appointmentTime: String!, comments: String!): Appointment
    updateServiceAppointment(appointmentId: ID!, appointmentDate: Date!, appointmentTime: String!): Appointment
    deleteServiceAppointment(appointmentId: ID!): Appointment
  }
`;

module.exports = typeDefs;