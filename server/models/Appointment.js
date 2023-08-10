const { Schema, model } = require('mongoose');

// Schema to create a course model
const appointmentSchema = new Schema(
    {
        appointmentID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        carID: {
            car: [{ type: Schema.Types.ObjectId, ref: 'car' }],
            required: false,
        },
        userID: {
            user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
            required: true,
        },
        appointmentType: {
            type: string,
            required: true,
        },
        serviceType: {
            type: string,
            required: false,
        },
        appointmentDate: {
            type: Date,
            default: Date.now(),
        },
        appointmentTime: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
            required: false,
        }
    },
    {
        toJSON: {
            id: false,
        },
    }
);

const Course = model('course', courseSchema);

module.exports = Course;