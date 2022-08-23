import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public formGroup: FormGroup;

  public onLoading: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private readonly router: Router,
  ) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public isFormValid(): boolean {
    return !this.onLoading && this.formGroup.status !== 'INVALID';
  }

  public submit(): void {
    this.onLoading = true;
    const value = <LoginPayload>this.formGroup.value;

    this.authService.performLogin(value)
      .then((response) => {
        if (response) {
          localStorage.setItem('token', response?.access_token);
          this.toastr.success('Bem Vindo! ' + response.username);

          setTimeout(() => {
            this.router.navigate(['/painel/dashboard']);
          }, 2400);
        }
      })
      .catch((ex) => {
        this.onLoading = false;
        this.toastr.error(ex.message);
        this.formGroup.reset();
      })
  }
}
