import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalAmount?: number;

  constructor (
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getTotalAmount();
  }

  get cartItems() {
    return this.cartService.items;
  }

  getTotalAmount() {
    this.totalAmount = 0;
    for (let product of this.cartItems) {
      this.totalAmount = this.totalAmount + product.price * product.quantity;
    }
  }

  removeProduct(idProduct: number) {
    this.cartService.removeItem(idProduct);
    this.getTotalAmount();
  }

  handleMinus(idProduct: number) {
    this.cartService.addQuantity(idProduct, -1);
    this.getTotalAmount();
  }
  handlePlus(idProduct: number) {
    this.cartService.addQuantity(idProduct, 1);
    this.getTotalAmount();
  }


}
