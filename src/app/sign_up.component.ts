import { Component,ViewChild,Output ,EventEmitter   }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormControl  } from '@angular/forms';
import { AuthService } from "angular2-social-login";
import{ModalComponent} from "./module.component";
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { registerModuleFactory } from '@angular/compiler/src/private_import_core';
import { request } from 'http';
import { LoginService } from 'services/login.service';

@Component({
    selector: 'signup-modal',
    templateUrl:'./sign_up.component.html',
    providers: []
})

export class SignUp {
    signup: FormGroup;
    sub: any;
    title = 'Angular Social Login';
    private user=false;
  @Output() loggedIn = new EventEmitter();
  @ViewChild(ModalComponent) module: ModalComponent;
  
  constructor(private fb: FormBuilder,public _auth: AuthService,public http: Http,public loginservice:LoginService ) {
    this.createForm();
  }
  
  save(vals){
    let data={'email':this.signup.get('email').value,'password':this.signup.get('password').value,'confirm':this.signup.get('confirm').value};
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    this.loginservice.postAllData(data).subscribe((todos)=>{
      this.signup.reset();
     alert("Successful");
    })

  }

  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        this.user=true;
        this.loggedIn.emit(false);
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

  ngOnDestroy(){
   
  }
   
  
    createForm() {
      this.signup = new FormGroup({
         email:new FormControl(''), 
        password:new FormControl(''),
        confirm: new FormControl('')
    });
    }
  }