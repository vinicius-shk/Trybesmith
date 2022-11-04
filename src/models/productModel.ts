import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO `Trybesmith`.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const [result] = await this.connection.execute<Product[] & ResultSetHeader>(
      'SELECT * FROM `Trybesmith`.Products',
    );
    return result as Product[];
  }
}