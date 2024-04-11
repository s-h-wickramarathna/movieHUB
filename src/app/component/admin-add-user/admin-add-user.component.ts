import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import PasswordMatch from '../../utils/passwordMatch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-add-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './admin-add-user.component.html',
  styleUrl: './admin-add-user.component.css'
})
export class AdminAddUserComponent {
  isAddUserFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  adminAddUserFrom: FormGroup = this.fb.group({
    newUser_firstName: ['', [Validators.required]],
    newUser_lastName: ['', [Validators.required]],
    newUser_Gender: ['', [Validators.required]],
    newUser_mobile: ['', [Validators.required, Validators.pattern('07[2467][0-9]{7}')]],
    newUser_Email: ['', [Validators.required, Validators.email]],
    newUser_password: ['', [Validators.required]],
    newUser_confirmPassword: ['', [Validators.required]],
  }, {
    validators: [PasswordMatch.match('newUser_password', 'newUser_confirmPassword')],
  })

  get addUserFromValidate() {
    return this.adminAddUserFrom.controls;
  }

  onUserAdd(): void {
    this.isAddUserFormSubmitted = true;

    if (this.adminAddUserFrom.invalid) {
      return;
    }

    console.log(JSON.stringify(this.adminAddUserFrom.value, null, 2));
  }

  onResetAdduserFrom() {
    this.adminAddUserFrom.reset({ first: 1 });
    this.isAddUserFormSubmitted = false;
  }

}
