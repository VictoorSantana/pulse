import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'pulse-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  @Input() public error: string = 'required';
  @Input() public control: AbstractControl | null;

  constructor() { }

  ngOnInit(): void {
  }

  

}
