import { Router } from 'express';
import { issueFungibleToken } from '../controllers/ftController';

const router = Router();

// POST /fungible/issue - endpoint for issuing a fungible token
router.post('/issue', issueFungibleToken);

export default router;
