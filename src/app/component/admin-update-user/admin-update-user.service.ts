import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AdminUpdateUserService{

    constructor(private http: HttpClient){}

    getUser(id: number): Observable<Object> | any{
        return this.http.get(`http://localhost:3000/users/find/${id}`);
    
      }

    updateUser(user: any): Observable<object> | any{
        return this.http.patch(`http://localhost:3000/users/update/${user.id}`, user) as Observable<any>;
        // console.log(user);

    }

}