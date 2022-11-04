import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET;

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, secret as string);

    req.body.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};