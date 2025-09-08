import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: Number,
  description: String,
  category: String,
  coverImage: String,
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);
