import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, HostListener, Inject } from '@angular/core'

@Directive({
  selector: '[maskPhone]',
})
export class MaskPhoneDirective {
  @HostBinding('autocomplete') public autocomplete
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }

  @HostListener('keyup', ['$event']) public inputChanged(e: any) {
    const value = e.target.value;
    if (value) {
      var v = value.replace(/\D/g, "");
      v = v.replace(/^0/, "");
      if (v.length > 12) {
        v = v.replace(/^(\d\d)(\d{2})(\d{5})(\d{4}).*/, "+$1 ($2) $3-$4");
      } else if (v.length > 11) {
        v = v.replace(/^(\d\d)(\d{2})(\d{4})(\d{4}).*/, "+$1 ($2) $3-$4");
      } else if (v.length > 10) {
        v = v.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (v.length > 5) {
        v = v.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (v.length > 2) {
        v = v.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
      } else {
        v = v.replace(/^(\d*)/, "($1");
      }
      e.target.value = v;
    } else {
      e.target.value = '';
    }
  }
}