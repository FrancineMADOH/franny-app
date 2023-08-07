import { Component ,OnInit, ViewChild} from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  isAdmin!:boolean;

constructor(private router:Router, private auth:AuthService){}

  ngOnInit(): void {
    if(!this.auth.bEmail.value){
      this.isAdmin = false;
    }
    
}
goToNewArticlePage(){
  this.router.navigate(['posts/new'])
}



}
