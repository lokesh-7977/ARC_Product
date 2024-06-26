import express from 'express';
import { register, login, logout, profile, updateProfile } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/logout', logout);

router.get('/profile', profile);

router.put('/update', updateProfile);

export default router;
