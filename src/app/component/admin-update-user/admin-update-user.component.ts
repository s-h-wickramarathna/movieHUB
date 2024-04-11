import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserUpdateDto } from './updateUser.dto';

@Component({
  selector: 'app-admin-update-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './admin-update-user.component.html',
  styleUrl: './admin-update-user.component.css'
})
export class AdminUpdateUserComponent {

  isUpdateUserFormSubmitted: boolean = false;
  userObj: UserUpdateDto ={
    id: 0,
    firstName: 'Sanchitha',
    lastName: 'Heashan',
    gender: 'Male',
    mobile: '0769898172',
    email: 'sanchithaheashan655@gmail.com',
    status: 'Active',
  } 

  constructor(private fb: FormBuilder) { }

  adminUpdateUserForm: FormGroup = this.fb.group({
    UpdateUserActive: [this.userObj.status === "Active"? 'true': 'false'],
    UpdateUser_firstName: [this.userObj.firstName, [Validators.required]],
    UpdateUser_lastName: [this.userObj.lastName, [Validators.required]],
    UpdateUser_Gender: [this.userObj.gender, [Validators.required]],
    UpdateUser_mobile: [this.userObj.mobile, [Validators.required]],
    UpdateUser_email: [this.userObj.email, [Validators.required]],
  })

  get UpdateUserFromValidate() {
    return this.adminUpdateUserForm.controls;
  }

  onResetUpdateuserFrom() {
    this.adminUpdateUserForm.reset({ first: 1 });
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
