import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { UpdateMoviesDTO } from './updateMovies.dto';

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
  paramId: any;

  moviesArrray: UpdateMoviesDTO[] = [
    {
      id: 0,
      img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
      name: 'Fast X',
      duration: '142 min',
      Released: '2023-05-17',
      status: 'Active',
      description: 'Tenth and final installment of the Fast and Furious franchise.',
      countries: 'United States of America, Japan',
      genre: 'Action, Crime, Thriller',
      cast: 'Vin Diesel, Gal Gadot, Ludacris, Daniela Melchior, Scott Eastwood',
      production: 'Universal Pictures, Original Film, One Race, Perfect Storm Entertainment, Dentsu, RK films',
    },
  ]

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.imageUrl = this.moviesArrray[0].img
  }

  updateFilmForm: FormGroup = this.fb.group({
    updateFilmActive: [this.moviesArrray[0].status === 'Active' ? 'true' : 'false'],
    updateMovie_img: [''],
    updateMovie_name: [this.moviesArrray[0].name, [Validators.required]],
    updateMovie_desc: [this.moviesArrray[0].description, [Validators.required]],
    updateMovie_duration: [this.moviesArrray[0].duration, [Validators.required]],
    updateMovie_released: [this.moviesArrray[0].Released, Validators.required],
    updateMovie_countries: [this.moviesArrray[0].cast, [Validators.required]],
    updateMovie_cast: [this.moviesArrray[0].cast, [Validators.required]],
    updateMovie_Genre: [this.moviesArrray[0].genre, [Validators.required]],
    updateMovie_Production: [this.moviesArrray[0].production, [Validators.required]],
  })

  get updateFilmFormValidate() {
    return this.updateFilmForm.controls;
  }

  onupdateFilmSubmit(): void {
    this.isupdateFilmSubmited = true;

    if (this.updateFilmForm.invalid) {
      return;

    } else {
      return console.log(JSON.stringify(this.updateFilmForm.value, null, 2));
    }
  }

  onResetFilmForms() {
    this.updateFilmForm.reset({ first: 1 });
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
