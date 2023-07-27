import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ngClick]',
  standalone: true,
})
export class EnterClickDirective {
  constructor(private readonly _el: ElementRef) {}

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (
      event.code === 'Enter' &&
      document.activeElement === this._el.nativeElement
    ) {
      this._el.nativeElement.click();
    }
  }
}
