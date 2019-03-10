import {Component, OnInit} from '@angular/core';
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
export class HomeComponent {
  constructor(private modalService: NgbModal, public storage: StorageService) { }

  // get getCart()

  products: Product[] = PRODUCTS;
  cart$ = this.storage.cart$;

  handleClick(product: Product) {
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.product = product;
  }

  handleAddToCart(product: Product) {
    this.storage.addToCart(product);
  }
}
