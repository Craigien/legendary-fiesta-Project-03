const { Schema, Types, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
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
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  //   id: false,
  // }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;