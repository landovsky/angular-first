import {EventEmitter, Injectable} from '@angular/core';
import {Product} from './product';
import {Cart} from './cart';
import {PRODUCTS} from './products';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  cart$: ReplaySubject<Cart> = new ReplaySubject();
  cartState: Cart;

  constructor() {
    this.initCart();
  }

  // get products(): Product[] {
  //
  // }

  initCart() {
    this.cartState = { products: [], total: 0 };
    this.updateCart();
  }

  addToCart(product: Product) {
    this.cartState.products.push(product);
    this.recalculateCart();
  }

  // make immutable
  recalculateCart() {
    this.cartState.total = this.cartState.products.map(product => product.price)
      .reduce((total, num) => total + num);
    this.updateCart();
  }

  updateCart() {
    this.cart$.next(this.cartState);
  }

  clearCart() {
    this.initCart();
    this.updateCart();
    console.log('cart cleared');
  }
}
