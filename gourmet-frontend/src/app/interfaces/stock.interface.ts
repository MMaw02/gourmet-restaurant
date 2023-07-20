import { Product } from "./product.interface";

export interface Stock {
  id:        number;
  unitIn?:    number;
  unitOut?:   number;
  balance:   number;
  description: string;
  createdAt: Date;
  product:   Product;
}
