import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category.interface';
import { Observable } from 'rxjs';
import { Stock } from '../interfaces/stock.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient
  ) { }

  getByIdProduct(idProduct: number): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${environment.apiBase}/stock/product/${idProduct}`);
  }

  createStock(idProduct: number, stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${environment.apiBase}/stock/admin/product/${idProduct}`, stock);
  }

  getBalanceProduct(stocks: Stock[]): number {
    return stocks[stocks.length - 1].balance;
  }
}
