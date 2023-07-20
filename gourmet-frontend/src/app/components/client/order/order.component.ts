import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { Order } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  currentUser?: User;
  idUser?: number;
  activeOrdersList: Order[] = [];
  totalPriceOrder: number[] = [];

  pageNo_ongoing: number = 1;
  pageNo_past: number = 1;
  orderPerPage: number = 4;
  rating: number[] = [1, 2, 3, 4, 5];
  orderRating?: any[];

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthenticationState().subscribe((user) => {
      this.currentUser = user;
      this.idUser = user.id;
      this.getOrdersByIdUser(this.idUser!);
    });

    // console.log("ID USER", this.idUser);
    // console.log("USUARIO",this.currentUser);

    // this.getOrdersByIdUser(this.idUser!);
  }

  getOrdersByIdUser(idUser: number) {
    this.orderService.getOrdersByIdUser(idUser).subscribe((data) => {
      this.activeOrdersList = data;

      data.forEach(o => {

        this.totalPriceOrder[o.id!] = this.orderService.getTotalPrice(o);
      });

      this.orderRating = new Array(this.activeOrdersList.length);
      for (let index = 0; index < this.activeOrdersList.length; index++) {
        this.orderRating[index] = this.activeOrdersList[index];
      }
    });
  }
}
