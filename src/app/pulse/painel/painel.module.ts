import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PainelRoutingModule,
  ],
  declarations: [   
    PainelComponent,     
  ],
  providers: [],
})
export class PainelModule { }
