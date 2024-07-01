import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUpdateFilmService {

  constructor(private http: HttpClient) { }

  getMovie(id: any): Observable<Object> | any{
    return this.http.get('http://localhost:3000/movies/movie/'+id);

  }


  updateMovie(id:number, filmData: FormData): Observable<object> | any{
    return this.http.patch(`http://localhost:3000/movies/update/${id}`, filmData) as Observable<any>;

}

}