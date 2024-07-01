import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { UpdateMoviesDTO } from './updateMovies.dto';
import { AdminUpdateFilmService } from './admin-update-film.service';

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

export class AdminUpdateFilmComponent implements OnInit {

  isupdateFilmSubmited: boolean = false;
  currentImgURL: string = "https://images.justwatch.com/poster/305436330/s166/fast-x.webp";
  imageUrl: string | ArrayBuffer | null = this.currentImgURL;
  selectedFile: File | null = null;
  url: string = '';
  paramId: any;
  adminUpdateFilmForm!: FormGroup;

  moviesArrray: UpdateMoviesDTO[] = [];
  @ViewChild('alertBorder') alertElementRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private adminUpdateFilmService: AdminUpdateFilmService
  ) { }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');

    this.adminUpdateFilmService.getMovie(parseInt(this.paramId)).subscribe(
      (response: any) => {
        if (response) {
          const formattedDate = this.convertToDisplayDateFormat(response.released);
          this.imageUrl = response.img;
          this.url = response.url
          this.adminUpdateFilmForm = this.fb.group({
            updateFilmActive: [response.status_id === 1 ? true : false],
            updateMovie_img: [this.imageUrl],
            updateMovie_name: [response.name, [Validators.required]],
            updateMovie_desc: [response.description, [Validators.required]],
            updateMovie_duration: [response.duration, [Validators.required]],
            updateMovie_released: [formattedDate, [Validators.required]],
            updateMovie_countries: [response.cast, [Validators.required]],
            updateMovie_cast: [response.cast, [Validators.required]],
            updateMovie_Genre: [response.genre, [Validators.required]],
            updateMovie_Production: [response.production, [Validators.required]],
          })

        }
      },
      (error: any) => {
        console.error('Error sending message:', error);
        // Error handling
      }
    );
  }

  get updateFilmFormValidate() {
    return this.adminUpdateFilmForm.controls;
  }

  onupdateFilmSubmit(): void {
    this.isupdateFilmSubmited = true;

    if (this.adminUpdateFilmForm.invalid) {
      return;
    }

    const formData = new FormData();
    // Append the file if selected
    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }

    // Append other form fields to FormData
    formData.append('name', this.adminUpdateFilmForm.get('updateMovie_name')?.value || '');
    formData.append('description', this.adminUpdateFilmForm.get('updateMovie_desc')?.value || '');
    formData.append('duration', this.adminUpdateFilmForm.get('updateMovie_duration')?.value || '');
    formData.append('released', this.adminUpdateFilmForm.get('updateMovie_released')?.value || '');
    formData.append('countries', this.adminUpdateFilmForm.get('updateMovie_countries')?.value || '');
    formData.append('cast', this.adminUpdateFilmForm.get('updateMovie_cast')?.value || '');
    formData.append('genre', this.adminUpdateFilmForm.get('updateMovie_Genre')?.value || '');
    formData.append('production', this.adminUpdateFilmForm.get('updateMovie_Production')?.value || '');
    formData.append('status_id', this.adminUpdateFilmForm.get('updateFilmActive')?.value ? '1' : '2');
    formData.append('url', this.url || '');

    this.adminUpdateFilmService.updateMovie(this.paramId,formData).subscribe(
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

  onResetFilmForms() {
    this.adminUpdateFilmForm.reset({ first: 1 });
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

  convertToDisplayDateFormat(isoDateString: string): string {
    // Convert ISO string to Date object
    const date = new Date(isoDateString);

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    // Return the formatted date in 'yyyy-MM-dd'
    return `${year}-${month}-${day}`;
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
