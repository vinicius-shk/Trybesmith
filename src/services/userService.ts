import jwt from 'jsonwebtoken';

import connection from '../models/connection';
import UserModel from '../models/userModel';
import IUser from '../interfaces/User';
import IServiceReturn from '../interfaces/ServiceReturn';

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

  public async login(user: IUser): Promise<IServiceReturn> {
    const { username } = user;
    const response = await this.model.login(user);
    if (!response) return { type: 401, message: 'Username or password invalid' };
    const secret = process.env.JWT_SECRET;
    const { id } = response;
    const token = jwt.sign({ id, username }, secret as string);
    return { type: null, message: token };
  }
}

export default UserService;
