import { Component, OnInit } from '@angular/core';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  productcategorys : Productcategory[]
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProductCategorys();
  }

  getAllProductCategorys(){
    return this.productService.getAllProductCategory().subscribe(data=>{
      this.productcategorys = data
    });
  }
}
