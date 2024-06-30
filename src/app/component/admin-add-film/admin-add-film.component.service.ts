import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class AdminAddFilmComponentService {

  constructor(private http: HttpClient) { }

  createfilm(filmData: FormData): Observable<any>{
 
    // Return the Observable without subscribing
   return this.http.post('http://localhost:3000/movies/upload', filmData) as Observable<any>;


    // return of();
  }

}
