import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  item: String,
  code: String,
}, { timestamps: true });