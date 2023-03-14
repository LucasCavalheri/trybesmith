import { Router } from 'express';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';

const router = Router();

router.use('/products', ProductRouter);
router.use('/users', UserRouter);

export default router;
