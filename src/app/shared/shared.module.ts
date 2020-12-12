import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenerPipe } from './shortener.pipe';

@NgModule({
  declarations: [
    ShortenerPipe
  ],
  exports: [
    ShortenerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
