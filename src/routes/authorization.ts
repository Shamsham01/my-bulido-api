// src/routes/authorization.ts
import { Router } from 'express';
import { authorizeConnection } from '../controllers/authController.js';
const router = Router();

// POST /authorization
router.post('/', authorizeConnection);

export default router;
