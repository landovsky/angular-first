import {Component, EventEmitter, OnInit} from '@angular/core';
import {PRODUCTS} from '../products';
import {Product} from '../product';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../storage.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private modalService: NgbModal, private storage: StorageService) { }

  title = 'Techloop Merchandise';
  products: object[] = PRODUCTS;
  cart: EventEmitter<Product[]> = this.storage.cart;
  data = this.storage;

  handleClick(product: Product) {
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.product = product;
  }

  handleAddToCart(product: Product) {
    this.data.addToCart(product);
  }
}
