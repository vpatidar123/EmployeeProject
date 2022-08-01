import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  categories : Productcategory[]
  product : Product = new Product(0,"","","",0,"",0,"","",0);
  constructor(private route : Router,
              private productService: ProductService) { }
  

  ngOnInit(): void {
    this.getAllProductCategorys();
  }
  getAllProductCategorys(){
    this.productService.getAllProductCategory().subscribe(data=>{
      console.log(data);
      this.categories=data;
    })
  }
  OnSubmit(){
    this.productService.saveProduct(this.product).subscribe(data =>{
      console.log(this.product)
      this.route.navigateByUrl("/products")
    })
  }
  home(){
    this.route.navigateByUrl("");
  }
}
