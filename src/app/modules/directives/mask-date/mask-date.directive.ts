import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, HostListener, Inject } from '@angular/core'

@Directive({
  selector: '[maskDate]',
})
export class MaskDateDirective {
  @HostBinding('autocomplete') public autocomplete
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }

  @HostListener('keypress', ['$event']) public disableKeys(e: any) {        
    this.document.all ? e.keyCode : e.keyCode;
    // e.target.maxLength = 8;
    return e.keyCode == 8 || e.keyCode == 47 || (e.keyCode >= 48 && e.keyCode <= 57)    
  }

  @HostListener('focusout', ['$event']) public inputChanged(e: any) {
    const value = e.target.value;
    if(value.length === 10) return;
    if((value + '').split('/').length === 3) return;

    if (value) {
      var v = value + '';

      v = v.slice(0, 8);
      v = v.padStart(8, '0');

      var day = v.slice(0, 2);
      var month = v.slice(2, 4);
      var year = v.slice(4, 8);

      if (Number(day) > 31 || Number(day) === 0) {
        day = '24';
      }

      if (Number(month) > 12 || Number(month) === 0) {
        month = '12';
      }

      v = (day + month + year).replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, "$1/$2/$3");
      e.target.value = v;
    } else {
      e.target.value = '';
    }
  }
}