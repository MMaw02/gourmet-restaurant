import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productsService.getProduct().subscribe(p => {
      this.products = p;
    })
  }

  delete(product: Product) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productsService.delete(product.id).subscribe(
        () => {
          this.getProduct()
          this.productsService.deleteFile(product.image).subscribe();
        }
      );
    }
  }

  getProductsByName(name: string) {
    this.productsService.getProductsByName(name).subscribe(p => {
      this.products = p;
    });
  }

}
