import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-admin-update-film',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin-update-film.component.html',
  styleUrl: './admin-update-film.component.css'
})

export class AdminUpdateFilmComponent {

  isupdateFilmSubmited: boolean = false;
  currentImgURL: string = "https://images.justwatch.com/poster/305436330/s166/fast-x.webp";
  imageUrl: string | ArrayBuffer | null = this.currentImgURL;
  selectedFile: File | null = null;

constructor(private fb: FormBuilder){}


updateFilmForm: FormGroup = this.fb.group({
  updateFilmActive: ['true'],
  updateMovie_img:[''],
  updateMovie_name:['', [Validators.required]],
  updateMovie_desc:['', [Validators.required]],
  updateMovie_duration:['', [Validators.required]],
  updateMovie_released:['', Validators.required],
  updateMovie_countries:['', [Validators.required]],
  updateMovie_cast:['', [Validators.required]],
  updateMovie_Genre:['', [Validators.required]],
  updateMovie_Production:['', [Validators.required]],
})

get updateFilmFormValidate(){
  return this.updateFilmForm.controls;
}

onupdateFilmSubmit(): void{
  this.isupdateFilmSubmited = true;

  if (this.updateFilmForm.invalid) {
    return;

  }else{
return console.log(JSON.stringify(this.updateFilmForm.value, null, 2));
  }
}

onResetFilmForms(){
  this.updateFilmForm.reset({first: 1});
  this.isupdateFilmSubmited = false;

  // Reset image URL
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
//           // updateitional handling if needed
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
