import {Component, Input} from '@angular/core';
import {Cart} from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() storage;
  @Input() cart: Cart;

  constructor() { }

  handleClearCart() {
    console.log('clear cart!');
    this.storage.clearCart();
  }
}
