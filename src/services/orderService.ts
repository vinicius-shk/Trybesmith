import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import IOrder from '../interfaces/Order';
import ICreateOrder from '../interfaces/CreateOrder';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orderList = await this.model.getAll();
    return orderList;
  }

  public async create(body: ICreateOrder): Promise<IOrder | boolean> {
    const createOrder = await this.model.create(body);
    if (!createOrder) return false;
    const response = { userId: body.user?.id, productsIds: body.productsIds };
    
    return response;
  }
}

export default OrderService;