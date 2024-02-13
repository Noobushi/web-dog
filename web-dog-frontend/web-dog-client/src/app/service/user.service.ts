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
  isAvatarSaved = new BehaviorSubject<boolean>(false);

  private host: string;

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  getIsAvatarSaved() {
    return this.isAvatarSaved.asObservable();
  }

  setIsAvatarSaved(value: boolean) {
    this.isAvatarSaved.next(value);
  }

  setCurrentUserId(id: number) {
    this.currentUserIdSubject.next(id);
  }

  public create(): Observable<User> {
    return this.http.post<User>(`${this.host}/users/create`, {});
  }

  public edit(userId: number, userForm: any): Observable<User> {
    return this.http.patch<User>(`${this.host}/users/update/${userId}`, userForm);
  }


  public setAvatar(userId: number, avatarUrl: string): Observable<void> {
    return this.http.patch<void>(`${this.host}/users/setAvatar/${userId}`, { "avatar": avatarUrl });
  }

  public getAllUsers(): Observable<void> {
    return this.http.get<void>(`${this.host}/users/getAll`, {});
  }

  public deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.host}/users/delete`, { body: user });
  }
}
