import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent
    
  ]
})
export class CoreModule { }
