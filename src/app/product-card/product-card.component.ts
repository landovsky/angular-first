import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() clickTitle: EventEmitter<Product> = new EventEmitter();
  @Output() clickAddToCart: EventEmitter<Product> = new EventEmitter();

  constructor() { }
}
