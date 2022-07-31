import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  department : Department = new Department(0,"","");
  constructor(private route : Router,
    private employeeService: ManagementServiceService) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.employeeService.saveDepartment(this.department).subscribe(data =>{
      console.log(data)
      this.route.navigateByUrl("/departments")
    })
  }
  home(){
    this.route.navigateByUrl("");
  }
}
