import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[]
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  
  getAllProducts(){
    this.productService.getAllProduct().subscribe(data=>{
      console.log(data);
      this.products=data;
    })
  }
}
