import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import PasswordMatch from '../../utils/passwordMatch';
import { first } from 'rxjs';

@Component({
  selector: 'app-admin-manage-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin-manage-users.component.html',
  styleUrl: './admin-manage-users.component.css'
})

export class AdminManageUsersComponent {
  isAddUserFormSubmitted: boolean = false;
  isUpdateUserFormSubmitted: boolean = false;

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

  adminUpdateUserForm: FormGroup = this.fb.group({
    UpdateUser_firstName: ['', [Validators.required]],
    UpdateUser_lastName: ['', [Validators.required]],
    UpdateUser_Gender: ['', [Validators.required]],
    UpdateUser_mobile: ['', [Validators.required]],
  })

  get addUserFromValidate() {
    return this.adminAddUserFrom.controls;
  }

  get UpdateUserFromValidate() {
    return this.adminUpdateUserForm.controls;
  }

  onUserAdd(): void {
    this.isAddUserFormSubmitted = true;

    if (this.adminAddUserFrom.invalid) {
      return;
    }

    console.log(JSON.stringify(this.adminAddUserFrom.value, null, 2));
  }

  onResetAdduserFrom(){
    this.adminAddUserFrom.reset({first: 1});
    this.isAddUserFormSubmitted = false;
  }
  onResetUpdateuserFrom(){
    this.adminUpdateUserForm.reset({first: 1});
    this.isUpdateUserFormSubmitted = false;
  }

  onUserUpdate(): void {
    this.isUpdateUserFormSubmitted = true;

    if (this.adminUpdateUserForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.adminUpdateUserForm.value, null, 2));
  }

}
