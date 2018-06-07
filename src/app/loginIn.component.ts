import {Component} from '@angular/core';
import {Login} from './login.component';
@Component({
  selector: 'login-modal',
  template: `
  <div  class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}" >
    <div class="modal-dialog"  data-keyboard="false" data-backdrop="static">
      <div class="modal-content">
        <div class="modal-header">
         <!-- <ng-content select=".app-modal-header"></ng-content>-->
         <div class="row" style="margin: 0 0 4% 0;color:blue;font-weight: bold;font-size: 19px;">Create a new account</div>
        </div>
        <div class="modal-body">
     <!--   <ng-content select=".app-modal-content"></ng-content>-->
            <login></login>
        </div>
        <div class="modal-footer" style="text-align:left">
         <!-- <ng-content select=".app-modal-footer"></ng-content>-->
        
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .modal {
      background: rgba(0,0,0,0.6);
     
    }
    .modal-content{
    border-radius: 29%;
    padding: 17%;
    opacity: 0.8;
    }
  `]
})
export class LoginComponent {

  public visible = true;
  private visibleAnimate = false;

  constructor(){}

  ngOnInit(){
    this.show();
  }

  public show(): void {
    this.visible = true;
    
    
    setTimeout(() => this.visibleAnimate = true, 100);
   
  }
  countChange(event){
    this.visible=event;

  }
  public hide(): void {
    this.visible = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
