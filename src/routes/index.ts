import { Router } from 'express';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import OrderRouter from './OrderRouter';
import LoginRouter from './LoginRouter';

const router = Router();

router.use('/products', ProductRouter);
router.use('/users', UserRouter);
router.use('/orders', OrderRouter);
router.use('/login', LoginRouter);

export default router;
