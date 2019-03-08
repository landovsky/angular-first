import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {StorageService} from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    ModalContainerComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailComponent]
})
export class AppModule { }
