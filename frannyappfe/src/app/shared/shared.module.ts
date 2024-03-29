import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty/empty.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    EmptyComponent,
    NotfoundComponent
  ],
  exports:[EmptyComponent],
  imports: [
    CommonModule
  ],

})
export class SharedModule { }
