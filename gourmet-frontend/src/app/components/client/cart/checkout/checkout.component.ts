import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from '../../../../services/order.service';
import { OrderProduct } from '../../../../interfaces/orderProduct.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  loading = false;
  productsCart: Product[] = [];
  totalAmount?: number;
  idUser!: number;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private productService: ProductsService,
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.cartService.items.map(item => {
      this.productService.getById(item.idProduct).subscribe(
        p => {
          this.productsCart[item.idProduct] = p;
        }
      );
    });

    this.authService.getAuthenticationState().subscribe(
      user => this.idUser = user.id
    );

    this.getTotalAmount();
  }

  get items() {
    return this.cartService.items;
  }

  pay() {
    let ops: OrderProduct[] = [];
    this.items.forEach(i => {
      const op: OrderProduct = {
        quantity: i.quantity,
        product: this.productsCart[i.idProduct]
      }

      ops.push(op);
    });

    const order: Order = {
      orderProducts: ops
    }
    this.orderService.createOrderByIdUser(order, this.idUser!).subscribe(
      () => {
        this.router.navigate(["/order"])
        this.cartService.clear();
      }
    );
  }

  getTotalAmount() {
    this.totalAmount = 0;
    for (let product of this.items) {
      this.totalAmount = this.totalAmount + product.price * product.quantity;
    }
  }
}
