import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AdminAddFilmComponentService } from './admin-add-film.component.service';

@Component({
  selector: 'app-admin-add-film',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admin-add-film.component.html',
  styleUrl: './admin-add-film.component.css'
})
export class AdminAddFilmComponent {

  isAddFilmSubmited: boolean = false;
  currentDate: Date = new Date();
  currentImgURL: string = "../../../assets/images/add-image.png"
  imageUrl: string | ArrayBuffer | null = this.currentImgURL;
  selectedFile: File | null = null;

  @ViewChild('alertBorder') alertElementRef!: ElementRef;

constructor(
  private fb: FormBuilder,
  private addFilmService: AdminAddFilmComponentService

){}


addFilmForm: FormGroup = this.fb.group({
  addMovie_img:['', Validators.required],
  addMovie_name:['', [Validators.required]],
  addMovie_desc:['', [Validators.required]],
  addMovie_duration:['', [Validators.required]],
  addMovie_released:['', Validators.required],
  addMovie_countries:['', [Validators.required]],
  addMovie_cast:['', [Validators.required]],
  addMovie_Genre:['', [Validators.required]],
  addMovie_Production:['', [Validators.required]],
  addMovie_Url:['', [Validators.required]],
})

get addFilmFormValidate(){
  return this.addFilmForm.controls;
}

onAddFilmSubmit(): void{
  this.isAddFilmSubmited = true;

  if (this.addFilmForm.invalid) {
    return;

  }
  const formData = new FormData();
  // Append the file if selected
  if (this.selectedFile) {
    formData.append('file', this.selectedFile, this.selectedFile.name);
  }

  // Append other form fields to FormData
  formData.append('name', this.addFilmForm.get('addMovie_name')?.value || '');
  formData.append('description', this.addFilmForm.get('addMovie_desc')?.value || '');
  formData.append('duration', this.addFilmForm.get('addMovie_duration')?.value || '');
  formData.append('released', this.addFilmForm.get('addMovie_released')?.value || '');
  formData.append('countries', this.addFilmForm.get('addMovie_countries')?.value || '');
  formData.append('cast', this.addFilmForm.get('addMovie_cast')?.value || '');
  formData.append('genre', this.addFilmForm.get('addMovie_Genre')?.value || '');
  formData.append('production', this.addFilmForm.get('addMovie_Production')?.value || '');
  formData.append('status_id', '1');
  formData.append('url', this.addFilmForm.get('addMovie_Url')?.value || '');


  this.addFilmService.createfilm(formData).subscribe(
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

onResetFilmForms(){
  this.addFilmForm.reset({first: 1});
  this.isAddFilmSubmited = false;
  this.imageUrl = this.currentImgURL;
}

onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  this.selectedFile = file;

  // Render the selected image temporarily
  const reader = new FileReader();
  reader.onload = (e) => {
    this.imageUrl = reader.result;
  };
  reader.readAsDataURL(file);
}


// uploadImage(): void {
//   if (this.selectedFile) {
//     const formData: FormData = new FormData();
//     formData.append('image', this.selectedFile, this.selectedFile.name);

//     // Example: Sending file to an API using Angular HttpClient
//     this.http.post('your-api-endpoint', formData)
//       .subscribe(
//         (response) => {
//           console.log('Image uploaded successfully:', response);
//           // Additional handling if needed
//         },
//         (error) => {
//           console.error('Error uploading image:', error);
//           // Error handling
//         }
//       );
//   } else {
//     console.error('No image selected.');
//   }
// }

}
