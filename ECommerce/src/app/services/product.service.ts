import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { Productcategory } from '../common/productcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private producturl = "http://localhost:8081/api/product" 
  private productcategoryurl =  "http://localhost:8081/api/productcategory" 
  constructor(private httpClient : HttpClient) { }

  getAllProduct() : Observable<Product[]>{
    console.log(this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response=>response._embedded.products)));
    return this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response=>response._embedded.products));
  }

  getAllProductCategory() : Observable<Productcategory[]>{
    console.log(this.httpClient.get<getProductCategoryResponse>(this.productcategoryurl).pipe(map(response=>response._embedded.productCategories)));
    return this.httpClient.get<getProductCategoryResponse>(this.productcategoryurl).pipe(map(response=>response._embedded.productCategories));
  }
  saveProduct(product : Product) : Observable<Product>{
    console.log(product)

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    }
    return this.httpClient.post<Product>(this.producturl,product,httpOptions);
  }
  
}

interface getProductResponse{
  _embedded:{
    products : Product[]
  }
}
  interface getProductCategoryResponse{
    _embedded:{
      productCategories : Productcategory[]
    }
}
