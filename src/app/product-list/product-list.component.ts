import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  products: Product[];
  getProducts(){
    this.ProductService.getProducts().subscribe(data => {
      this.products = data;
    })
    }
    removeItem(id){
      this.ProductService.removeProduct(id).subscribe(response => {
        this.products = this.products.filter(product => product.id != response.id);
      })
    }
    
    
    

}