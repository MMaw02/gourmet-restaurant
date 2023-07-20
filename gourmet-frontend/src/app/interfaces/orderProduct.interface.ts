import { Product } from "./product.interface";

export interface OrderProduct {
  id?:          number;
  quantity:    number;
  product:     Product;
}
