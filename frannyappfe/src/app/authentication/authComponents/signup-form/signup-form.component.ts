import { Component } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  faArrowRight = faArrowRight;

}
