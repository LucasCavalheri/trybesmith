import connection from '../models/connection';
import { Order } from '../interfaces';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}

  public getAllOrders = async (): Promise<Order[]> => {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  };
}