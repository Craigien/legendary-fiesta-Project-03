const { Schema, Types, model } = require('mongoose');

const carSchema = new Schema(
  {
    carId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
  // {
  //   toJSON: {
  //     id: false
  //   }
  // }
);

const Car = model('car', carSchema);

module.exports = Car;