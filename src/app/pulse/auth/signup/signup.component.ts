import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { UserPayload } from 'src/app/models/payloads/user.payload';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { GenericValidator } from 'src/app/shared/validators/generic.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public formGroup: FormGroup;

  public onLoading: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private service: UserService,
    private toastr: ToastrService,
    private readonly router: Router,
  ) {
    this.formGroup = this.fb.group({
      fullname: ['', [Validators.required, GenericValidator.fullName()]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, GenericValidator.email()]],
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
    this.formGroup.disable();
    const value = <UserPayload>this.formGroup.value;

    this.service.create(value)
      .then((response) => {
        if (response) {                    
          this.toastr.success('Conta criada com sucesso! ' + response.username);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2400);
        }
      })
      .catch((ex) => {
        this.onLoading = false;
        this.toastr.error(ex.message);
        this.formGroup.enable();
        this.formGroup.reset();
      })
  }
}
