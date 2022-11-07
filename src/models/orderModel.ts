import { Pool, ResultSetHeader } from 'mysql2/promise';

import IOrder from '../interfaces/Order';
import ICreateOrder from '../interfaces/CreateOrder';

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

  public async create(body: ICreateOrder): Promise<boolean> {
    const [{ insertId }] = await this.connection.execute<IOrder & ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [body.user?.id],
    );
    if (insertId) {
      await Promise.all(body.productsIds.map(async (id) => {
        await this.connection.execute<ResultSetHeader>(
          `UPDATE Trybesmith.Products SET orderId = ?
          WHERE id = ? ORDER BY id DESC LIMIT 1`,
          [insertId, id],
        );
      }));
      return true;
    }
    return false;
  }
}