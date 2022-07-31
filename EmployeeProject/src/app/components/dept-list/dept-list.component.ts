import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DepartmentComponent implements OnInit {
   
  departments : Department[]
  constructor(private managementService : ManagementServiceService,
    private activeRoute : ActivatedRoute ,
    private route : Router,) { }
  

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllDepartments()
    });
  }
  getAllDepartments(){
    this.managementService.getAllDepartment().subscribe(data=>{
      console.log(data);
      this.departments=data;
    })
  }
  
  addDepartment(){
    this.route.navigateByUrl("addDepartment");
  }
  
  
}
