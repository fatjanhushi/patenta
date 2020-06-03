const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  email: String,
  fullName: String,
});

mongoose.model('users', UserSchema);
