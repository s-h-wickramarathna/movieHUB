import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminManageUserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<Object> | any{
    return this.http.get('http://127.0.0.1:3000/users/all');

  }

  getUserByValue(text: string): Observable<Object> | any{
    alert(text);
    return this.http.get(`http://localhost:3000/users/search?searchText=${text}`);

  }

}