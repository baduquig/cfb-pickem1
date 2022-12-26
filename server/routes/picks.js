import express from 'express';
import { getPicks } from '../controllers/picks';

const router = express.Router();

// localhost:5000/picks
router.get('/', getPicks());

export default router;