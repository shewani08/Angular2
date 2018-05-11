import {Http,RequestOptions ,Headers,Response} from '@angular/http';
import {Injectable} from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { URLSearchParams } from "@angular/http"
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
 export class LoginService{
   constructor(private http:Http){}
 

  postAllData (body: Object) {
     let url="http://localhost:3300/createUsers";
     let data = new URLSearchParams();
     // data.append('email','negi.shewani');
     // data.append('password', 'shewani08');
      return this.http.post(url, body)
      .map(res => {
        if (res) {   
                 
          return true;
        }

        return false;
      })
     
    }
  }
