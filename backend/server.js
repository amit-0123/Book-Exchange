import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@book-exchange.w3zzkdg.mongodb.net/
`)
  .then(() => {
    console.log("MongoDB Connected Successfully.....");
  }).catch(err => console.log(err));

// app.get("/", (req,res)=>{
//     res.send("Server and MongoDb are working!.....")
// })

app.listen(PORT, ()=>{
    console.log(`Your Server is running on port number: ${PORT}`)
})