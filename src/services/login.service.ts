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
      console.log("insert postAllData function");
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

    getAllData (options) {
      console.log("insert getalldata function");
     let url="http://localhost:3300/getUser";
    // let data = new URLSearchParams();
     return this.http.get(url)
     // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));     
    }
  }
