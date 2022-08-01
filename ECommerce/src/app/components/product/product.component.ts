import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[]
  constructor(private productService : ProductService,
    private route : Router,) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  
  getAllProducts(){
    this.productService.getAllProduct().subscribe(data=>{
      console.log(data);
      this.products=data;
    })
  }
  addProduct(){
    this.route.navigateByUrl("addProduct");
  }
  home(){
    this.route.navigateByUrl("");
  }
}
