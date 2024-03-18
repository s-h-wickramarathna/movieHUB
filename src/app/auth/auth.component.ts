import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import PasswordMatch from '../utils/passwordMatch';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({
    signUpFirstname: new FormControl(''),
    signUpLastname: new FormControl(''),
    signUpGender: new FormControl(''),
    signUpPhoneNumber: new FormControl(''),
    signUpEmailAddress: new FormControl(''),
    signUpPassword: new FormControl(''),
    signUpConfirmPassword: new FormControl(''),
    acceptTerms: new FormControl(''),
  });

  loginForm: FormGroup = new FormGroup({
    signInEmail: new FormControl(''),
    signInPassword: new FormControl(''),
  });

  signUpFormSibmitted = false;
  loginFormSibmitted = false;
  constructor(private routes: Router, private formbuider: FormBuilder) { }

  ngOnInit(): void {
    
    this.signUpForm = this.formbuider.group({
      signUpFirstname: ['', Validators.required],
      signUpLastname: ['', Validators.required],
      signUpGender: ['', Validators.required],
      signUpPhoneNumber: ['', [Validators.required, Validators.pattern('07[2467][0-9]{7}')]],
      signUpEmailAddress: ['', [Validators.required, Validators.email]],
      signUpPassword: ['', Validators.required],
      signUpConfirmPassword: ['', Validators.required],
      acceptTerms: ['', Validators.requiredTrue]
    }, {
      validators: [PasswordMatch.match('signUpPassword', 'signUpConfirmPassword')],
    });

    this.loginForm = this.formbuider.group({
      signInEmail: ['', [Validators.required,Validators.email]],
      signInPassword: ['', Validators.required],
    });
  }


  get signupFormValidate() {
    return this.signUpForm.controls;
  }

  onSignUp(): void {
    this.signUpFormSibmitted = true;

    if (this.signUpForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.signUpForm.value, null, 2));
  }

  get loginFormValidate(){
    return this.loginForm.controls;
  }

  onLogin(): void{
    this.loginFormSibmitted = true;

    if(this.loginForm.invalid){
      return;
    }

    console.log(JSON.stringify(this.loginForm.value));
  }


  login(): void {
    this.routes.navigate(['/home']);
  }
}
