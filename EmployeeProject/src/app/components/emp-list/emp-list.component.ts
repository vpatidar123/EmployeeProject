import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
   
  employees : Employee[]
  constructor(private managementService : ManagementServiceService,
    private route : Router,
    private activeRoute : ActivatedRoute) { }
  

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllEmployees()
    });
  }
  getAllEmployees(){
    this.managementService.getAllEmployee().subscribe(data=>{
      console.log(data);
      this.employees=data;
    })
  }
  addEmployee(){
    this.route.navigateByUrl("addEmployee");
  }
  home(){
    this.route.navigateByUrl("");
  }
}
