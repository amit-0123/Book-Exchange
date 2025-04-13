import express from 'express';
import { createBook, getAllBooks, updateStatus } from '../controllers/bookController.js';
const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.patch('/:id/status', updateStatus);

export default router;
