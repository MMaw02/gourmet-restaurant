import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBase}/order`);
  }

  getOrdersByIdUser(idUser: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBase}/order/user/${idUser}`);
  }

  createOrderByIdUser(order: Order, idUser: number): Observable<Order> {
    return this.http.post<Order>(`${environment.apiBase}/order/${idUser}`, order);
  }

  getOrderById(idOrder: number): Observable<Order> {
    return this.http.get<Order>(`${environment.apiBase}/order/${idOrder}`);
  }

  getTotalPrice(order: Order): number {
    let totalPrice = 0;

    order.orderProducts.forEach(o=> {
      totalPrice = totalPrice + o.quantity * o.product.price;
    });

    return totalPrice;
  }
}
