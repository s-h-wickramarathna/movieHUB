import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAddUserService {

  constructor(private http: HttpClient) { }

  createMessage(user: any): Observable<any>{

    // Return the Observable without subscribing
   return this.http.post('http://localhost:3000/users/add', user) as Observable<any>;


    // return of();
  }

}
