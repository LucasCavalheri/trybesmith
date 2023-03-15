import { Router } from 'express';
import UserController from '../controllers/UserController';
import { validateUser } from '../middlewares/FieldsMiddleware';

const router = Router();

const userController = new UserController();

router.post('/', validateUser, userController.createUser);

export default router;
