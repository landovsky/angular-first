import {Component, Input, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Cart} from '../cart';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  icon;
  constructor(public storage: StorageService) {
    this.icon = faShoppingCart;
  }

  cart$ = this.storage.cart$;
}
