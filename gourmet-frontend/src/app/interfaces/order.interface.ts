import { User } from './user.interface';
import { OrderProduct } from './orderProduct.interface';

export interface Order {
  id?:               number;
  user?:             User;
  orderProducts:     OrderProduct[];
  createdAt?:        Date;
}
