import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router,ParamMap} from "@angular/router";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  deptId:number;
  constructor(private _activatedRoute:ActivatedRoute,private _router:Router) { }

  goPrevious(){

    let previousId=this.deptId-1;
    this._router.navigate(['/dept',previousId]);
  }
goNext(){
  let nextId=this.deptId+1;
    this._router.navigate(['/dept',nextId]);
}

  ngOnInit() {

   // let id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));    this.deptId=id;
    })



  }


  toToBack(){
    let selectedId=this.deptId?this.deptId:null;
    this._router.navigate(['/dept',{id:selectedId}]);
  }

}
