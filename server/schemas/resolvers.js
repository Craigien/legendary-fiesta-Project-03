const { AuthenticationError } = require('apollo-server-express');
const { User, Car, Appointment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  // Find user from database
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    cars: async () => {
      return await Car.find();
    },

    car: async (parent, { carId }) => {
      return Car.findOne({ _id: carId });
    },
  },
  // Add user to database
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addAppointment: async (parent, { carId, userId, appointmentType, appointmentDate, appointmentTime, comments }) => {
      // Create and return the new School object
      return await Appointment.create({ carId, userId, appointmentType, appointmentDate, appointmentTime, comments });
    },
    updateAppointment: async (parent, { appointmentId, appointmentDate, appointmentTime }) => {
      // Find and update the matching class using the destructured args
      return await Appointment.findOneAndUpdate({ appointmentId: appointmentId }, { appointmentDate }, { appointmentTime }, { new: true });
    },
    deleteAppointment: async (parent, { appointmentId }) => {
      return await Appointment.findOneAndDelete({ appointmentId: appointmentId });
    },
    // addServiceAppointment: async (parent, { appointmentId, userId, appointmentType, serviceType, appointmentDate, appointmentTime, comments}) => {
    //   return await Appointment.create({appointmentId, userId, appointmentType, serviceType, appointmentDate, appointmentTime, comments})
    // },
    // updateServiceAppointment: async (parent, {appointmentId, appointmentDate, appointmentTime }) => {
    //   return await Appointment.findOneAndUpdate({appointmentId: appointmentId }, { appointmentDate}, { appointmentTime}, { new: true });
    // },
    // deleteServiceAppointment: async (parent, { appointmentId }) => {
    //   return await Appointment.findOneAndDelete({ appointmentId: appointmentId });
    // }
  },
};

  module.exports = resolvers;