const { default: mongoose } = require("mongoose");
const { isEmail } = require("validator");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is requried"],
    minlength: [3, " name too small"],
    maxlength: [20, "must not be more than 20 "],
    lowercase: true,
  },
  email: {
    type: String,
    required: ["email must be required"],
    minlength: [3, " email too small"],
    maxlength: [50, "email not be more than 20 "],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return isEmail(v);
      },
      message: ({ value }) => `${value} is not a valid email`,
    },
  },
  age: {
    min: [18, "must be an adult"],
    type: Number,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    lowercase: true,
  },
  password: {
    type: String,
  },
});



const User = mongoose.model("User", userSchema);




module.exports = User;
