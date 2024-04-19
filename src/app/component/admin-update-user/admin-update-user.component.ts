import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserUpdateDto } from './updateUser.dto';
import { AdminUpdateUserService } from './admin-update-user.service';
import { ActivatedRoute } from '@angular/router';

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
export class AdminUpdateUserComponent implements OnInit {

  isUpdateUserFormSubmitted: boolean = false;
  adminUpdateUserForm!: FormGroup;

  @ViewChild('alertBorder') alertElementRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private readonly adminUpdateUserService: AdminUpdateUserService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // alert(id);
    await this.adminUpdateUserService.getUser(parseInt(id!)).subscribe(
      (response: any) => {
        if (response) {
          this.adminUpdateUserForm = this.fb.group({
            UpdateUser_id: [response.id],
            UpdateUserActive: [response.status_id === 1 ? true : false],
            UpdateUser_firstName: [response.firstName, [Validators.required]],
            UpdateUser_lastName: [response.lastName, [Validators.required]],
            UpdateUser_Gender: [response.gender_id === 1 ? 'Male' : 'Female', [Validators.required]],
            UpdateUser_mobile: [response.mobile, [Validators.required]],
            UpdateUser_email: [response.email, [Validators.required]],
          })
        }
      },
      (error: any) => {
        console.error('Error sending message:', error);
        // Error handling
      }
    );
  }


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

    const id = this.adminUpdateUserForm.get('UpdateUser_id')?.value;
    const firstName = this.adminUpdateUserForm.get('UpdateUser_firstName')?.value;
    const lastName = this.adminUpdateUserForm.get('UpdateUser_lastName')?.value;
    const mobile = this.adminUpdateUserForm.get('UpdateUser_mobile')?.value;
    const email = this.adminUpdateUserForm.get('UpdateUser_email')?.value;
    const gender = this.adminUpdateUserForm.get('UpdateUser_Gender')?.value;
    const status = this.adminUpdateUserForm.get('UpdateUserActive')?.value;

    const user = {
      id,
      firstName,
      lastName,
      mobile,
      email,
      gender,
      status_id: status ? '1' : '2'
    }

    this.adminUpdateUserService.updateUser(user).subscribe(
      (response: any) => {
        if (response) {
          const alert = this.alertElementRef.nativeElement;
          alert.classList.remove('hidden');
          alert.classList.add('block', 'flex');
          setTimeout(() => {
            window.location.reload();
          }, 1500);

        } else {
          console.log('user Updated Error');
        }
      },
      (error: any) => {
        console.log(error);
      });


  }

}
