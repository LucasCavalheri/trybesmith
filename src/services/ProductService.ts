import connection from '../models/connection';
import { Product } from '../interfaces';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) {}

  public createProduct = async (product: Product): Promise<Product> => {
    const newProduct = await this.productModel.createProduct(product);
    return newProduct;
  };

  public getAllProducts = async (): Promise<Product[]> => {
    const products = await this.productModel.getAllProducts();
    return products;
  };
}
