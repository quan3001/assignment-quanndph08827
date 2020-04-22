import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ProductService } from './product.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ NgbModule, BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ShopComponent, AboutComponent, NotFoundComponent, HomeComponent, ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductAddComponent, ProductManagerComponent, DashboardComponent, AdminComponent, ProductBrandComponent, ContactComponent, RegisterComponent, NavbarComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
