const { Schema, model } = require('mongoose');

// Schema to create an appointment model
const appointmentSchema = new Schema(
    {
        carId: { type: Schema.Types.ObjectId, ref: 'car' },
        userId: { type: Schema.Types.ObjectId, ref: 'user' },
        appointmentDate: {
            type: String
        },
        appointmentTime: {
            type: String
        },
        comments: {
            type: String
        }
    },
);

const Appointment = model('appointment', appointmentSchema);

module.exports = Appointment;