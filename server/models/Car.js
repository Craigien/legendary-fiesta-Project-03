const { Schema, Types, model } = require('mongoose');

// Schema to create a car model
const carSchema = new Schema(
  {
    year: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    vehicleType: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    monthlyPayment: {
        type: Number,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
    },
    image: {
        type: String,
    }
    
  },
);

const Car = model('car', carSchema);

module.exports = Car;