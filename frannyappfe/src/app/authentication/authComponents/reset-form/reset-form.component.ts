import { Component } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent {
  faArrowRight = faArrowRight;
  email:string = "";
  newPassword:string = "";
  newPasswordConfirm:string = "";

  checkMactchingPassword():void{
    console.log("password mismatch");
  }

  backToLogin():void{
    console.log(`email:${this.email}, new pass:${this.newPassword}, confirm:${this.newPasswordConfirm}`);
  }
}
