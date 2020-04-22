import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path: '', component: NavbarComponent, 
        children : [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component:HomeComponent}, 
          { path: 'sneaker', component:ProductListComponent},
          { path: 'contact', component:ContactComponent}, 
          { path: 'about', component:AboutComponent},
          { path: 'register', component:RegisterComponent},
        ]
    },

  { path: 'home', component:HomeComponent},
  { path: 'manager', component:ProductManagerComponent},
  { path: 'admin', component: AdminComponent, 
      children : [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component:DashboardComponent},
        { path: 'brand', component:ProductBrandComponent},
        { path: 'about', component:AboutComponent},
        { path: 'contact', component:ContactComponent},
        { path: 'product/add', component:ProductAddComponent},
        { path: 'product/:productID', component:ProductDetailComponent},
        { path: 'product/edit/:productID', component:ProductEditComponent},
      ]
  },
  { path: 'product/add', component:ProductAddComponent},
  { path: 'product/:productID', component:ProductDetailComponent},
  { path: 'product/edit/:productID', component:ProductEditComponent},
  { path: 'detail', component:ProductDetailComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'register', component:RegisterComponent},
  {path: '404' , component: NotFoundComponent},
  {path: '**' , redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
