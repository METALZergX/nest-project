import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: String,
  password: String,
  status: { type: Boolean, default: true },
}, { timestamps: true });