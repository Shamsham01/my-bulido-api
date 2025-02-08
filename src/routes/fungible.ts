import { Router } from 'express';
import { issueFungibleToken } from '../controllers/ftController.js';

const router = Router();
router.post('/issue', issueFungibleToken);

export default router;
