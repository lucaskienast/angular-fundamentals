import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @Input('appChangeCase') case: string = "upper";

  @HostListener('blur') onblur() {
    let changedValue: string = (this.case === 'upper')
      ? this.elRef.nativeElement.value.toUpperCase()
      : this.elRef.nativeElement.value.toLowerCase();
    this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue);
  }

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    console.log(this.elRef.nativeElement.value);
  }

}
