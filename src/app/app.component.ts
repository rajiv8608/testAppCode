import { Component } from '@angular/core';
import { ServiceService} from '../app/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(public service:ServiceService){
  
  }
}