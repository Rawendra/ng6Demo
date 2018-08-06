import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EMPLOYEES:Employee[]=[
    {
      id: 12,
      name:"Ross",
      salary:23900
  },
  {
    id: 11,
    name:"Rachel",
    salary:56000
}
,    {
  id: 13,
  name:"Chandler",
  salary:99600
}
,   {
id: 10,
name:"Monica",
salary:29900
}

  ];

  getEmployees():Observable<Employee[]>{
    return of(this.EMPLOYEES) ;
  }
 
  constructor() { }
}
