const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Car {
    _id: ID
    year: String
    make: String
    model: String
    vehicleType: String
    condition: String
    price: Number
    monthlyPayment: Number
    mileage: Number
    color: String
    image: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment
    updateAppointment
    deleteAppointment
  }
`;

module.exports = typeDefs;