const { Schema, Types } = require('mongoose');

const Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 100,
      minlength: 6,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = userSchema;