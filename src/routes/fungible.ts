// src/routes/fungible.ts
import { Router } from 'express';
import { issueFungibleToken } from '../controllers/ftController';

const router = Router();

// Define your endpoint
router.post('/issue', issueFungibleToken);

// Export the router so it can be imported in other files.
export default router;
