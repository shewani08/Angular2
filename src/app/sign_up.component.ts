import { Component,ViewChild,Output ,EventEmitter   }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormControl  } from '@angular/forms';
import { AuthService } from "angular2-social-login";
import{ModalComponent} from "./module.component";
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { registerModuleFactory } from '@angular/compiler/src/private_import_core';
import { request } from 'http';
import { LoginService } from 'services/login.service';
//import{EqualValidator} from './services/EqualValidator';

@Component({
    selector: 'signup-modal',
    templateUrl:'./sign_up.component.html',
    providers: []
})

export class SignUp {
    signup: FormGroup;
    sub: any;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    title = 'Angular Social Login';
    errorMessage:string;
    private user=false;
  @Output() loggedIn = new EventEmitter();
  @ViewChild(ModalComponent) module: ModalComponent;
  
  constructor(private fb: FormBuilder,public _auth: AuthService,public http: Http,public loginservice:LoginService ) {
    this.createForm();
  }
  
  save(vals){
   let data={'email':this.signup.get('email').value,'password':this.signup.get('password').value};
  console.log("data"+JSON.stringify(data));
   var headers = new Headers();
  headers.append('Content-Type','application/json');
   
    this.loginservice.getAllData(data)
   /* subscribe(
      (todos)=>{
      this.signup.reset();
     alert("Successfully");
    })*/
    .subscribe(
      function(response) { console.log("Success Response" + response);},
      function(error) {this.errorMessage=<any>error;
         console.log("Error happened" + error);
    },
      function() { console.log("the subscription is completed");this.signOUt();}
  );
  this.signup.reset();
  }
 

  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        this.user=true;
        this.loggedIn.emit(true);
       },
      (error)=>{
        alert("error");
      }
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=true;}
    )
  }
  signOUt(){
    this.loggedIn.emit(false);
  }

  ngOnDestroy(){
   
  }
   
  
    createForm() {
      this.signup = new FormGroup({
         email:new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]), 
        password:new FormControl('',Validators.required)
      //  confirm: new FormControl('',Validators.required)
    });
    }
  }