import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string;

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  public create(userForm: any): Observable<User> {
    return this.http.post<User>(`${this.host}/users/create`, userForm);
  }

  public edit(userId: number, userForm: any): Observable<User> {
    const params = new HttpParams().set("userId", userId.toString());
    return this.http.patch<User>(`${this.host}/users/create`, userForm, { params: params });
  }
}
