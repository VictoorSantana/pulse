import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { AccountComponent } from './account/account.component';
import { HintComponent } from 'src/app/components/hint/hint.component';

@NgModule({
  imports: [
    CommonModule,
    PainelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [   
    PainelComponent,     
  ],
  providers: [],
})
export class PainelModule { }
