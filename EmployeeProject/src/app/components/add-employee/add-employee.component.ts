import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee : Employee = new Employee(0,"","","",0,0,0,0);
  constructor(private route : Router,
              private employeeService: ManagementServiceService) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.employeeService.saveEmployee(this.employee).subscribe(data =>{
      console.log(data)
      this.route.navigateByUrl("/employees")
    })
  }
  home(){
    this.route.navigateByUrl("");
  }
}
