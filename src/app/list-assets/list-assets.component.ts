import { Component, OnInit ,HostListener} from '@angular/core';
import {ServiceService } from '../service.service';
@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrls: ['./list-assets.component.css']
})
export class ListAssetsComponent implements OnInit {

  public listOfAssets:any = [];
  public allList : any = [];
  constructor( public service: ServiceService) {
    this.service.getList.subscribe(res => { 
      if(res){
       for(var key in res){          
          for(var key2 in res[key]){
            this.allList.push(res[key][key2]);
          }           
         }        
      }
      this.allList.map((key,value)=>{
        key.isHover = false;
        key.isEditable = false;
      })                   
   })
   }
  public isHover:boolean = false;
  displayButtons = function(index){
   this.allList[index].isHover = true;
  }
  hiddeButtons = function(index){
    this.allList[index].isHover = false;
  }
  isEditable = function(index){
    this.allList[index].isEditable = true;
  }
  isView = function(index){
    this.allList[index].isEditable = false;
  }
  ngOnInit() {
  }

}
