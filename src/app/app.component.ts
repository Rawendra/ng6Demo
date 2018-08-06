import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageFromChild="";
  title = 'Employee UI';
  emp:Employee={
    id: 12,
    name: "Rawendra",
    salary:12000 
  }
}
