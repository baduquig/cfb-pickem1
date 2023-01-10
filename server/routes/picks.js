import express from 'express';
import { getUserPicks, submitPick, updatePick } from '../controllers/picks.js';

const router = express.Router();

router.get('/:id', getUserPicks);
router.post('/:id', submitPick);
router.patch('/:id', updatePick)

export default router;