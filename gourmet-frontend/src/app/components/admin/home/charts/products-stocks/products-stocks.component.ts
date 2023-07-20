import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Observable, combineLatest } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { Stock } from 'src/app/interfaces/stock.interface';
import { ProductsService } from 'src/app/services/products.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-products-stocks',
  templateUrl: './products-stocks.component.html',
  styleUrls: ['./products-stocks.component.css']
})
export class ProductsStocksComponent implements OnInit {

  products: Product[] = [];
  stocks: Stock[] = [];
  single: any[] = [];


  legendPosition: LegendPosition = LegendPosition.Right;

  constructor(
    private productsService: ProductsService,
    private stockService: StockService,
  ) {}

  ngOnInit(): void {

    this.productsService.getProduct().subscribe(
      p => {
        this.products = p;
        this.obtenerStocks();
      }
    );
  }


  obtenerStocks() {
    const stocksObservables: Observable<any>[] = [];
    for (const product of this.products) {
      stocksObservables.push(this.stockService.getByIdProduct(product.id));
    }

    combineLatest(stocksObservables).subscribe((stocksData: any[][]) => {
      this.single = [];

      // Itera sobre los datos de los stocks y crea el chartData
      for (let i = 0; i < stocksData.length; i++) {

        if (stocksData[i].length == 0) {
          continue
        }

        const stocks = stocksData[i];
        const productName = this.getProductName(stocks[0].product.id);
        const balance = this.stockService.getBalanceProduct(stocks);

        this.single.push({ name: productName, value: balance });
      }
    });
  };

  getProductName(productId: number): string {
    const product = this.products.find((producto: any) => producto.id === productId);
    return product ? product.name : '';
  }

}
