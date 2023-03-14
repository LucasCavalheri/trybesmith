import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public createProduct = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id, ...product };
  };
}
