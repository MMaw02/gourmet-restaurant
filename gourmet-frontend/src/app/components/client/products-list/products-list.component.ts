import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  pageNo: number = 1;
  productPerPage: number = 3;
  products: Product[] = [];
  @Input() homeRouteFlag!: boolean;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProduct().subscribe(p => {
      this.products = p;
    })
  }
}
