import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      o => this.orders = o
    );
  }

  totalPriceOrder(order: Order): number {
    return this.orderService.getTotalPrice(order);
  }

}
