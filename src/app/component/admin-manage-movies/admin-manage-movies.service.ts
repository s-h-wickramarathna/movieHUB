import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AdminManageMoviesService {
    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<Object> | any{
        return this.http.get('http://localhost:3000/movies');
    
      }
    
      getMovieByValue(text: string): Observable<Object> | any{
        alert(text);
        return this.http.get(`http://localhost:3000/movies/search?searchText=${text}`);
    
      }

}