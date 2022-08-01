import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcategoryComponent } from './components/productcategory/productcategory.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

const routes : Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'products', component:ProductComponent},
  {path: 'categories', component:ProductcategoryComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'addCategory', component: AddCategoryComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcategoryComponent,
    WelcomeComponent,
    AddProductComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
