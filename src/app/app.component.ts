import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works shewani Negi!';
  fullImagePath='.//assets//images//isha.jpg';
  show:boolean=false;
  ngOnInit(){
    

  }
  loggedIn(event){
    alert("event is"+event);
    this.show=event;
  }
}
