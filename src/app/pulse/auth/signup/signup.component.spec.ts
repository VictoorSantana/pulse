import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HintComponent } from 'src/app/components/hint/hint.component';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule, ToastrModule.forRoot()],
      declarations: [SignupComponent, HintComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable submit', () => {
    const emailElem = fixture.debugElement.query(By.css('#email'));
    const passwordElem = fixture.debugElement.query(By.css('#password'));
    const usernameElem = fixture.debugElement.query(By.css('#username'));
    const fullnameElem = fixture.debugElement.query(By.css('#fullname'));
    const submitElem = fixture.debugElement.query(By.css('#submit'));

    emailElem.nativeElement.value = 'email@email.com';
    passwordElem.nativeElement.value = 'asd123';
    usernameElem.nativeElement.value = 'Lorem';
    fullnameElem.nativeElement.value = 'Lorem Ipsum';

    expect(submitElem.nativeElement.getAttribute('disabled')).not.toBe(null);
  });
});
