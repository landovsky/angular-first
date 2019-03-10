import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {StorageService} from './storage.service';
import {Observable} from 'rxjs';
import {Cart} from './cart';

@Injectable({
  providedIn: 'root'
})

export class CartResolverService implements Resolve<Cart> {

  constructor(public storage: StorageService) { }

  resolve() {
    return this.storage.cartState;
  }
}
