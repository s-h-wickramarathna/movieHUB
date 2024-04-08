import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

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

constructor(private fb: FormBuilder){}


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
})

get addFilmFormValidate(){
  return this.addFilmForm.controls;
}

onAddFilmSubmit(): void{
  this.isAddFilmSubmited = true;

  if (this.addFilmForm.invalid) {
    return;

  }else{
return console.log(JSON.stringify(this.addFilmForm.value, null, 2));
  }
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
