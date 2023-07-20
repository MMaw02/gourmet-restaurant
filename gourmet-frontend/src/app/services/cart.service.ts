import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key = 'storeProduct_cart';
  private _items: Cart[] = [];
  /**
   * Es privado porque solo el servicio se encargará de interactuar con el atributo. Otro no.
   * Si es publico otro componentes lo puede modificar.
  **/

 constructor() {
  const itemsString = localStorage.getItem(this.key);
  this._items = itemsString ? JSON.parse(itemsString) : [];
 }

 // Solo funciona con localstorage
  get items() {
    return this._items;
  }

  addItem(product: Product, quantity: number) {
    const newItem: Cart = {
      idProduct: product.id,
      nameProduct: product.name,
      image: product.image,
      quantity: quantity,
      price: product.price
    }

    this._items.push(newItem);

    this.saveInLocalStorage();
  }

  removeItem(idProduct: number) {
    this._items = this._items.filter(i => i.idProduct != idProduct);
    this.saveInLocalStorage();
  }

  clear() {
    this._items = [];
    this.saveInLocalStorage();
  }

  itemAlreadyExists(idProduct: number): boolean {
    return this._items.findIndex(i => i.idProduct == idProduct) >= 0;
  }

  addQuantity(idProduct: number, quantity: number) {
    let itemExisting = this._items.findIndex(i => i.idProduct === idProduct);
    this._items[itemExisting].quantity += quantity;

    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this._items));
  }

}
