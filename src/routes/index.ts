import { Router } from 'express';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import OrderRouter from './OrderRouter';

const router = Router();

router.use('/products', ProductRouter);
router.use('/users', UserRouter);
router.use('/orders', OrderRouter);

export default router;
