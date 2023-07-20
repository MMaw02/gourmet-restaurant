import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from '../../../../services/cart.service';
import { Cart } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedImage?: string;
  product: Product = {} as Product;
  productId: number;
  balance!: number;
  quantity: number = 1;

  constructor (
    private productsService: ProductsService,
    private stockService: StockService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
  ) {
    this.productId = this.activatedRoute.snapshot.params['productId'];
  }

  ngOnInit(): void {
    this.productsService.getById(this.productId).subscribe(
      (product) => {
        this.product = product;
        this.selectedImage = product.image;
      }
    );

    this.stockService.getByIdProduct(this.productId).subscribe(
      sp => {
        this.balance = this.stockService.getBalanceProduct(sp);
      }
    );
  }

  handleMinus() {
    this.quantity--;
  }
  handlePlus() {
    this.quantity++;
  }

  addProductToCart(product: Product, quantity: number) {
    let productExistsInCart = this.cartService.itemAlreadyExists(product.id);

    if (productExistsInCart) {
      this.cartService.addQuantity(product.id, quantity);
    } else {
      this.cartService.addItem(product, quantity);
    }

    this.router.navigate(['/cart']);
  }

  removeProductFromCart(idProduct: number) {
    this.cartService.removeItem(idProduct);
  }

}
