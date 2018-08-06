import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EMPLOYEES} from "../mock-employees";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee;

onSelect(emp: Employee): void {
  this.selectedEmployee = emp;
}

  employees=EMPLOYEES;
  employee:Employee={
    id: 1,
    name: 'Alex',
    salary:12000
  };;
  constructor() { }

  ngOnInit() {

    

   
  }

}
