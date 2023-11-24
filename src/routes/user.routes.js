import { Router } from 'express';
import { registerUser, loginUser, getUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/getUser', getUser);

export default router;
