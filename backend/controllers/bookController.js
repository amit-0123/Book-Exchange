import { Book } from "../models/Book.js";


export const createBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  };


  export const getAllBooks = async (req, res) => {
    const books = await Book.find().populate('ownerId', 'name email');
    res.json(books);
  };
  
  export const updateStatus = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    book.status = book.status === 'available' ? 'rented' : 'available';
    await book.save();
    res.json(book);
  };