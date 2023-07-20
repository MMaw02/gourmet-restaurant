import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../../services/stock.service';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/interfaces/stock.interface';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit{
  productId?: number;
  stocks?: Stock[];

  ngOnInit(): void {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.stockService.getByIdProduct(this.productId!).subscribe(s => {
      this.stocks = s;
    });
  }

  constructor(
    private stockService: StockService,
    private activatedRoute: ActivatedRoute,

  ) {}

}
