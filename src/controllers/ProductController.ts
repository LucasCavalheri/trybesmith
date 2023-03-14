import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productService.createProduct(product);
    return res.status(201).json(createdProduct);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    return res.status(200).json(products);
  };
}