import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import PasswordMatch from '../../utils/passwordMatch';
import { first } from 'rxjs';
import { UserDTO } from './user.dto';
import { AdminManageUserService } from './admin-manage-users.service';

@Component({
  selector: 'app-admin-manage-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './admin-manage-users.component.html',
  styleUrl: './admin-manage-users.component.css'
})

export class AdminManageUsersComponent {

  isAddUserFormSubmitted: boolean = false;
  isUpdateUserFormSubmitted: boolean = false;
  userArray: UserDTO[] = []
  searchText: string = '';

  constructor(
    private fb: FormBuilder,
    private readonly adminManageUserService: AdminManageUserService
  ) { }

  ngOnInit() {

    this.adminManageUserService.getUser().subscribe(
      (response: any) => {
        console.log(response);
        this.userArray = response;
        // Additional handling if needed
      },
      (error: any) => {
        console.error('Error sending message:', error);
        // Error handling
      }
    );

  }

  onSearchUser(event: Event) {
    // Get the new input value
    const value = (event.target as HTMLInputElement).value;
    this.adminManageUserService.getUserByValue(value).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          this.userArray = response;
        }
      },
      (error: any) => {
        throw new Error(error);
      });
  }

}
