import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesDTO } from './movies.dto';
import { AdminManageMoviesService } from './admin-manage-movies.service';

@Component({
  selector: 'app-admin-manage-movies',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './admin-manage-movies.component.html',
  styleUrl: './admin-manage-movies.component.css'
})
export class AdminManageMoviesComponent implements OnInit{

  moviesArray: MoviesDTO[] = [];
  searchText: string = '';

  constructor(
    private readonly adminManageMoviesService: AdminManageMoviesService
  ) { }

  ngOnInit() {

    this.adminManageMoviesService.getAllMovies().subscribe(
      (response: any) => {
        console.log(response);
        this.moviesArray = response;
        // Additional handling if needed
      },
      (error: any) => {
        console.error('Error sending message:', error);
        // Error handling
      }
    );

  }

  onSearchMovies(event: Event) {
    // Get the new input value
    const value = (event.target as HTMLInputElement).value;
    this.adminManageMoviesService.getMovieByValue(value).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          this.moviesArray = response;
        } 
      },
      (error: any) => {
        throw new Error(error);
      });
  }

}
