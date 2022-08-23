import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, HostListener, Inject } from '@angular/core'

@Directive({
  selector: '[maskCpf]',
})
export class MaskCpfDirective {
  @HostBinding('autocomplete') public autocomplete
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }

  @HostListener('keyup', ['$event']) public inputChanged(e: any) {    
    const value = e.target.value;    
    if (value) {
      let v = value + '';
      e.target.value = v
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    } else {
      e.target.value = '';
    }    
  }
}