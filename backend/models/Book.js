import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  location: String,
  contact: String,
  status: { type: String, default: "available" },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export const Book = mongoose.model('Book', bookSchema);
