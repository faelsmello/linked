import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './components/blocks/blocks.component';



@NgModule({
  declarations: [
    BlocksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BlocksComponent]
})
export class SharedModule { }
