import express from 'express';
import { getPicks } from '../controllers/picks';

const router = express.Router();

// Get all user picks
router.get('/', getPicks());

export default router;