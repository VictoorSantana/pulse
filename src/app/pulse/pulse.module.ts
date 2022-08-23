import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PulseComponent } from './pulse.component';
import { PulsesRoutingModule } from './pulse-routing.module';
import { HintComponent } from '../components/hint/hint.component';
import { DashboardComponent } from './painel/dashboard/dashboard.component';
import { AccountComponent } from './painel/account/account.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MaskReaisDirective } from '../modules/directives/mask-reais/mask-reais.directive';
import { OnlyNumbersDirective } from '../modules/directives/only-numbers/only-numbers.directive';
import { RealPipe } from '../shared/pipes/pipes';

@NgModule({
  imports: [
    PulsesRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [  
    HintComponent,  
    PulseComponent,
    DashboardComponent,
    AccountComponent,
    SigninComponent,
    SignupComponent,
    MaskReaisDirective,
    OnlyNumbersDirective,
    RealPipe
  ],
  providers: []
})
export class PulseModule { }
