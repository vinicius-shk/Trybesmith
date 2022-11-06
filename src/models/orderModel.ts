import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrder from '../interfaces/Order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<IOrder[] & ResultSetHeader>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) productsIds FROM Trybesmith.Orders AS o
      LEFT JOIN Trybesmith.Products AS p ON o.id = p.orderId
      GROUP BY o.id`,
    );
    return result;
  }
}