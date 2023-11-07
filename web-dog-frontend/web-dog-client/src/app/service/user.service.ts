import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserIdSubject: BehaviorSubject<number> = new BehaviorSubject<any>(null);
  currentUserId$ = this.currentUserIdSubject.asObservable();

  private host: string;

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  public create(): Observable<User> {
    return this.http.post<User>(`${this.host}/users/create`, {});
  }

  public edit(userId: number, userForm: any): Observable<User> {
    return this.http.patch<User>(`${this.host}/users/update/${userId}`, userForm);
  }

  setCurrentUserId(id: number) {
    this.currentUserIdSubject.next(id);
  }

  public setAvatar(userId: number, avatarUrl: string): Observable<void> {
    return this.http.patch<void>(`${this.host}/users/setAvatar/${userId}`, { "avatar": avatarUrl });
  }
}
