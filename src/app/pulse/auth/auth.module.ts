import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SignupComponent } from './signup/signup.component';
import { HintComponent } from 'src/app/components/hint/hint.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthComponent
  ],
  providers: [AuthService],
})
export class AuthModule { }
