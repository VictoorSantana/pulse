import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, HostListener, Inject } from '@angular/core'

@Directive({
  selector: '[maskReais]',
})
export class MaskReaisDirective {
  @HostBinding('autocomplete') public autocomplete
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }

  @HostListener('keyup', ['$event']) public inputChanged(e: any) {
    const value = e.target.value;
    if (value) {
      var v = value + '';
      v = v.replace(/[^0-9\,]/g, '');
      v = v.trim();
      e.target.value = v;
    } else {
      e.target.value = '0,00';
    }
  }
}