import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const token = await this.userService.create(req.body);
    res.status(201).json({ token });
  };
}

export default UserController;