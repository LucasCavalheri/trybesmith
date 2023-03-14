import { Router } from 'express';
import ProductRouter from './ProductRouter';

const router = Router();

router.use('/products', ProductRouter);

export default router;
