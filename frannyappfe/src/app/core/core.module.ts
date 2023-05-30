import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HeaderComponent,
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent 
  ]
})
export class CoreModule {
 

 }
