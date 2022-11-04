import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/Product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO `Trybesmith`.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<IProduct[] & ResultSetHeader>(
      'SELECT * FROM `Trybesmith`.Products',
    );
    return result as IProduct[];
  }
}