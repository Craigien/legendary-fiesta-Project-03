const { Schema, model } = require('mongoose');

// Schema to create a course model
const appointmentSchema = new Schema(
    {
        // appointmentId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
        carId: { type: Schema.Types.ObjectId, ref: 'car' },
        // required: false,
        userId: { type: Schema.Types.ObjectId, ref: 'user' },
        // required: true,
        appointmentType: {
            type: String,
            required: true,
        },
        // serviceType: {
        //     type: String,
        //     // required: false,
        // },
        appointmentDate: {
            type: String,
            // default: Date.now(),
        },
        appointmentTime: {
            type: String
        },
        comments: {
            type: String,
            // required: false,
        }
    },
    // {
    //     toJSON: {
    //         id: false,
    //     },
    // }
);

const Appointment = model('appointment', appointmentSchema);

module.exports = Appointment;