import { Category } from "./category.interface";

export interface Product {
  id:          number;
  code:        string;
  name:        string;
  description: string;
  price:       number;
  image:       string;
  createdAt:   Date;
  updatedAt:   Date;
  category:    Category;
}
