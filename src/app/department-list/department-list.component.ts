import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private _router:Router) { }

  departments:Department[]=[
{id:1,name:"Mechanical"},
{id:2,name:"Computer"},
{id:3,name:"Electrical"},
{id:4,name:"Chemical"}

  ]

  ngOnInit() {
  }

  onSelect(dept:Department){
    this._router.navigate(['/dept',dept.id])
  }

}
