import { Component } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {
  storage;

  constructor(storage: StorageService) {
    this.storage = storage;
  }
}
