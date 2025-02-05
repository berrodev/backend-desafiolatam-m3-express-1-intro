import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

const router = Router();
router.get('/', async (req, res) =>
  res.status(201).json({ message: 'users route' })
);
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);

export default router;
