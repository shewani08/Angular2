import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ModalComponent} from './module.component';
import {SignUp} from './sign_up.component';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { RouterModule } from '@angular/router';
import{LoginService} from '../services/login.service';
import{EqualValidator} from './services/EqualValidator';
import {ToolTipModule} from 'angular2-tooltip'
import { LoginComponent } from './loginIn.component';
import { Login } from './login.component';
import { MainComponent } from './main.component';
let providers = {
    "google": {
      "clientId":'378321986942-bsj1fjhu63n899harbbhmegg5qom0l17.apps.googleusercontent.com'
    },
   
    "facebook": {
      "clientId": "182700325692640",
      "apiVersion": "v2.12" //like v2.4 
    }
  };
  // Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  } 
];
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginComponent,
    SignUp,
   EqualValidator,
   Login,
   MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Angular2SocialLoginModule, 
    ToolTipModule,
    RouterModule.forRoot(ROUTES)
 ],
  providers: [LoginService,EqualValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);