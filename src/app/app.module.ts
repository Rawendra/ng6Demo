import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component'; // <-- NgModel lives here
import {EmployeeService}  from "./employee.service";
import { AppRoutingModule,routingComponents } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
 

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    UserComponent,routingComponents, PageNotFoundComponent, DepartmentDetailsComponent 
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
