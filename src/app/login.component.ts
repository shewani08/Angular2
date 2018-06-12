import { Component,ViewChild,Output ,EventEmitter   }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormControl  } from '@angular/forms';
import{LoginComponent} from "./loginIn.component";
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { registerModuleFactory } from '@angular/compiler/src/private_import_core';
import { request } from 'http';
import { LoginService } from 'services/login.service';

@Component({
    selector: 'login',
    templateUrl:'./login.component.html',
    providers: []
})

export class Login {
    login: FormGroup;
    sub: any;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    @Output() loggedIn = new EventEmitter();
    private user=false;
 
  
  constructor(private fb: FormBuilder,public loginservice:LoginService ) {
    this.createForm();
  }

  logoutfunction(){
  console.log("hi");
     this.loggedIn.emit(true);
  }
  
  createForm() {
      this.login = new FormGroup({
         email:new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]), 
        password:new FormControl('',Validators.required),
        confirm: new FormControl('',Validators.required)
    });
    }

   save(vals){
      let data={'email':this.login.get('email').value,'password':this.login.get('password').value,'confirm':this.login.get('confirm').value};
      console.log("data"+JSON.stringify(data));
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      this.loginservice.postAllData(data)
      .subscribe(
        function(response) { console.log("Success Response" + response);},
        function(error) 
        {this.errorMessage=<any>error;
           console.log("Error happened" + error);
      },
        function() { console.log("the subscription is completed");
       this.logoutfunction();
      }
    );
    this.login.reset();
    }

   
  }