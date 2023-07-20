import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: Category[] = [];
  products: Product[] = [];
  productsByCategory: { [categoryId: number]: Product[] } = {};

  showOrHideFlag: boolean[] = [true, true, true];

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(c => {
      this.categories = c;
      c.forEach(c => {
        this.getProductByIdCategory(c.id);
      });
    });
  }

  getProductByIdCategory(idCategory: number): void {
    this.productsService.getByIdCategory(idCategory).subscribe(
      p => {
        this.productsByCategory[idCategory] = p;
      }
    );
  }
  getProductsForCategory(idCategory: number): Product[] {
    let productCategory = this.productsByCategory[idCategory] || [];

    return productCategory;
  }


  toggleFlag(index: number) {
    this.showOrHideFlag[index] = !this.showOrHideFlag[index];
  }


  addToCart(item: any) {

  }
}
