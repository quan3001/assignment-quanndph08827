import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 4;
  collectionSize = Product.length;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    }
    removeItem(id){
      this.productService.removeProduct(id).subscribe(response => {
        this.products = this.products.filter(product => product.id != response.id);
      })
    }

}