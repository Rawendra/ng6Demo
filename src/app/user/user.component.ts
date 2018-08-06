import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input("parentData") public employee;

  @Output() public childEvent=new EventEmitter();

  name="rawendra";
  hasError=true;
  highColor="blue";
  successclass="error";
  isDisbaled:boolean=false;
  public message="";

  public employees:Employee[];

  public someClasses={
    "t1":this.hasError,
    't2':this.hasError


  }

  toParent(employee){
    employee.name="Mr."+employee.name;
    employee.salary= employee.salary+900000;
    this.childEvent.emit(employee)
  }

  logMessage(someString:string){

    this.message=someString;


  }

  public someStyles={
    color:'blue',
    fontStyle:"italic"
    
  }
  toggle(){
    this.hasError=!this.hasError;
  //  this.successclass=!this.successclass;
  }
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {

     this._employeeService.getEmployees().subscribe(data=>this.employees=data);


  }

}
