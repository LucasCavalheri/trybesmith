import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { validateProduct } from '../middlewares/FieldsMiddleware';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAllProducts);
router.post('/', validateProduct, productController.createProduct);

export default router;
