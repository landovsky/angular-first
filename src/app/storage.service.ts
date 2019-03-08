import {EventEmitter, Injectable, Output, OnInit} from '@angular/core';
import {Product} from './product';
import {Cart} from './cart';

@Injectable({
  providedIn: 'root'
})

export class StorageService implements OnInit {
  @Output() cart$: EventEmitter<Cart> = new EventEmitter();

  cartState: Cart = { products: [], price: 0 };

  ngOnInit() {
    this.cart$.emit(this.cartState);
  }

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
