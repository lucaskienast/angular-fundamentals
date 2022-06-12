import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';



@NgModule({
  declarations: [
    CorePipePipe,
    CoreDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CorePipePipe,
    CoreDirectiveDirective
  ]
})
export class CoreModule { }
