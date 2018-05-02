import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable() 
export class ServiceService {

  constructor(public http : Http) {     

  }
 
    getList = this.http.get('../assets/assets.json').map(res =>{
     return res.json();
    });        
  

}
