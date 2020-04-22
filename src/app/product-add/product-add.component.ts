import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product} from '../Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product;
  imageUrl: string = "https://www.cloud-ace.sg/hubfs/Service%20Icons/Service4.png";
    fileToUpload: File = null;
  constructor(
        private productService : ProductService,
        private router: Router
  ) { }
  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('/admin/dashboard')
    });
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
   this.productService.postFile(Caption.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = "https://www.kindpng.com/picc/m/261-2619141_cage-clipart-victorian-cloud-upload-icon-svg-hd.png";
     }
   );
  }
}