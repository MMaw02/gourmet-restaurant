import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../services/order.service';
import { Order } from 'src/app/interfaces/order.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order!: Order;
  idOrder?: number;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.idOrder =  parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.orderService.getOrderById(this.idOrder).subscribe(
      o => this.order = o
    );
  }


}
