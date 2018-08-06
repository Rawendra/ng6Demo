import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';



const routes: Routes = [
  {path:"",redirectTo:"/dept", pathMatch:"full"},
  { path: 'dept', component: DepartmentListComponent },
  { path: 'dept/:id', component: DepartmentDetailsComponent },
  { path: 'emp', component: EmployeeListComponent },
  {path:"**",component:PageNotFoundComponent}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents=[EmployeeListComponent,DepartmentListComponent,PageNotFoundComponent,DepartmentDetailsComponent]
