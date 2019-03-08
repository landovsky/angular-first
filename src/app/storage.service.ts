import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from './product';
import {Cart} from './cart';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  @Output() cart$: EventEmitter<Cart> = new EventEmitter();
  @Output() emptyCart: Cart = { products: [], price: 0 };

  cartState: Cart = this.emptyCart;

  constructor() { }

  addToCart(product: Product) {
    this.cartState.products.push(product);
    this.updateCart();
  }

  updateCart() {
    this.cart$.emit(this.cartState);
  }

  clearCart() {
    this.cartState = { products: [], price: 0 };
    this.updateCart();
  }
}
