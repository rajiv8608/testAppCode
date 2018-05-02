import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public listOfAssets:any = {};
  constructor(public service:ServiceService){
    this.service.getList.subscribe(res => { 
       if(res){
        this.listOfAssets = res;       
       }               
   })
  }

  ngOnInit() {
  }

}
