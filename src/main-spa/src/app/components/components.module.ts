import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDataComponent } from './fetch-data.component';

@NgModule({
  declarations: [FetchDataComponent],
  imports: [
    CommonModule
  ],
  exports: [FetchDataComponent],
})
export class ComponentsModule { }
