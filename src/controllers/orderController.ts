import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (req: Request, res: Response) => {
    const orderList = await this.orderService.getAll();
    res.status(200).json(orderList);
  };
}

export default OrderController;