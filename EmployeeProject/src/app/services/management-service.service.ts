import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  empurl = "http://localhost:8081/api/emp"
  depturl = "http://localhost:8081/api/dept"
  constructor(private httpClient : HttpClient) {}

    getAllEmployee() : Observable<Employee[]>{

      return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees))
    }
    getAllDepartment() : Observable<Department[]>{

      return this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments))
    }
    saveEmployee(employee : Employee) : Observable<Employee>{
      console.log(employee)

      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-origin': '*'
        })
      }
      return this.httpClient.post<Employee>(this.empurl,employee,httpOptions);
    }

    saveDepartment(department : Department) : Observable<Department>{
      console.log(Department)

      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-origin': '*'
        })
      }
      return this.httpClient.post<Department>(this.depturl,Department,httpOptions);
    }
}

interface getEmployeeResponse{
    _embedded : {
      employees : Employee[]
    }
  }
interface getDepartmentResponse{
      _embedded : {
        departments : Department[]
      }
    }


