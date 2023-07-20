import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId?: number;
  order: Order = {} as Order;
  totalPrice!: number;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
  }

  ngOnInit(): void {
    this.orderService.getOrderById(this.orderId!).subscribe(
      o => {
        this.order = o;
        this.totalPrice = this.orderService.getTotalPrice(o);
      }
    );
  }
}
