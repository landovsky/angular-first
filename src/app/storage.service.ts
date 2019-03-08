import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  @Output() cart: EventEmitter<Product[]> = new EventEmitter();

  constructor() { }
  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cart.emit(this.cartItems);
  }
}
