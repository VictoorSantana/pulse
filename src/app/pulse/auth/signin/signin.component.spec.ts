import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HintComponent } from 'src/app/components/hint/hint.component';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule, ToastrModule.forRoot()],
      declarations: [SigninComponent, HintComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should enable submit', () => {
    const emailElem = fixture.debugElement.query(By.css('#email'));
    const passwordElem = fixture.debugElement.query(By.css('#password'));
    const submitElem = fixture.debugElement.query(By.css('#submit'));

    emailElem.nativeElement.value = 'Lorem';
    passwordElem.nativeElement.value = 'Lorem';
    
    expect(submitElem.nativeElement.getAttribute('disabled')).not.toBe(null);
  });
});
