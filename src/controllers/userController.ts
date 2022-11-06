import { Request, Response } from 'express';

import UserService from '../services/userService';
import loginSchema from '../validations/loginSchema';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const token = await this.userService.create(req.body);
    res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const { type, message } = await this.userService.login(req.body);
    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
  };
}

export default UserController;