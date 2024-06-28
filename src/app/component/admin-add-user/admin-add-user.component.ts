import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import PasswordMatch from '../../utils/passwordMatch';
import { CommonModule } from '@angular/common';
import { AdminAddUserService } from './admin-add-user.service';
import { finalize } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

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
  @ViewChild('alertBorder') alertElementRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private adminAddUserService: AdminAddUserService
  ) { }


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

    const firstName = this.adminAddUserFrom.get('newUser_firstName');
    const lastName = this.adminAddUserFrom.get('newUser_lastName');
    const mobile = this.adminAddUserFrom.get('newUser_mobile');
    const email = this.adminAddUserFrom.get('newUser_Email');
    const password = this.adminAddUserFrom.get('newUser_password');
    const gender = this.adminAddUserFrom.get('newUser_Gender');

    const gender_id = gender?.value=='Male'? '1' : '2';

    const user = {
      firstName: firstName ? firstName.value : '',
      lastName: lastName? lastName.value : '',
      mobile: mobile? mobile.value : '',
      email: email? email.value : '',
      password: password? password.value : '',
      gender_id: gender_id? gender_id : '',
      role_id: '2',
      status_id: '1',
    };


    this.adminAddUserService.createMessage(user).subscribe(
      (response: any) => {
        if(response){
          const alert = this.alertElementRef.nativeElement;
          alert.classList.remove('hidden');
          alert.classList.add('block','flex');
          setTimeout(() => {
            window.location.reload(); 
          }, 2000);
          
        }
      },
      (error: any) => {
        console.error('Error sending message:', error);
        // Error handling
      }
    );
  }

  onResetAdduserFrom() {
    this.adminAddUserFrom.reset({ first: 1 });
    this.isAddUserFormSubmitted = false;
  }

}
