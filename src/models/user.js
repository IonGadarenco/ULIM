import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    imgURL: String,
    password: String
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);
