import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import IOrder from '../interfaces/Order';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orderList = await this.model.getAll();
    return orderList;
  }
}

export default OrderService;