import { Component } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  faArrowRight = faArrowRight;
}
