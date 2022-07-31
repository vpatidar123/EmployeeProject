import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DepartmentComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Router, Routes, RouterModule} from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component'
import { FormsModule } from '@angular/forms';
import { AddDepartmentsComponent } from './components/add-departments/add-departments.component';


const routes : Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'employees', component:EmpListComponent},
  {path: 'departments', component:DepartmentComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'addDepartment', component: AddDepartmentsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DepartmentComponent,
    WelcomeComponent,
    AddEmployeeComponent,
    AddDepartmentsComponent
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
