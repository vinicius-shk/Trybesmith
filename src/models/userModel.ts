import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/User';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId } = result;
    return { id: insertId, ...user };
  }

  public async login(user: IUser): Promise<IUser> {
    const { username, password } = user;
    const [[result]] = await this.connection.execute<IUser[] & ResultSetHeader>(
      'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return result;
  }
}