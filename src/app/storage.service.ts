import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from './product';
import {Cart} from './cart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  @Output() cart$: EventEmitter<Cart> = new EventEmitter();

  constructor() { }
  cartState: Cart = { products: [], price: 0 };

  addToCart(product: Product) {
    console.log('adding to cart');
    console.log(`current items: ${this.cartState.products.length}`);
    this.cartState.products.push(product);
    console.log(`after add items: ${this.cartState.products.length}`);
    this.cart$.emit(this.cartState);
  }
}
