import jwt from 'jsonwebtoken';

import connection from '../models/connection';
import UserModel from '../models/userModel';
import IUser from '../interfaces/User';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<string> {
    const created = await this.model.create(user);
    const { username, level, classe } = user;
    const { id } = created;
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id, username, level, classe }, secret as string);
    return token;
  }
}

export default UserService;