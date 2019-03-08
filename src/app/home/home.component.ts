import {Component, EventEmitter, OnInit} from '@angular/core';
import {PRODUCTS} from '../products';
import {Product} from '../product';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../storage.service';
import {Subscription} from 'rxjs';
import {Cart} from '../cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  constructor(private modalService: NgbModal, private storage: StorageService) { }

  products: object[] = PRODUCTS;
  localStorage = this.storage;
  cart$: Subscription = this.storage.cart$.subscribe(cart => this.updateCart(cart));
  cart: Cart;

  ngOnInit(): void {
    this.initCart();
  }

  initCart() {
    this.cart = this.localStorage.emptyCart;
  }

  updateCart(cart: Cart) {
    this.cart = cart;
  }

  handleClick(product: Product) {
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.product = product;
  }

  handleAddToCart(product: Product) {
    this.localStorage.addToCart(product);
  }
}
