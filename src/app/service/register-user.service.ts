import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user/user';

@Injectable()
export class RegisterUserService {

  public loginEvent = new EventEmitter<boolean>();
  public token: string;

  constructor(private http: HttpClient) { }

  private getToken(): string {
    return localStorage.getItem('token');
  }

  private getHeaderAuthorization(): Object {
    return { headers: { 'Authorization': this.getToken() } };
  }

  /**
   * @description Get matches by session
   * @returns Matches found
   */
  public createUser(user: User): Observable<User> {

    return this.http.post<User>(environment.API + '/create-user', user);
  }

  /**
   * @description Get matches by session
   * @returns Matches found
   */
  public validateEmail(token): Observable<User> {
    const headers = { 'Authorization': `Bearer ${token}`};
    return this.http.put<User>(environment.API + '/validate-email', null, { headers });
  }

  public getUserWithTempToken(token): Observable<User> {
    const headers = { 'Authorization': `Bearer ${token}`};
    return this.http.get<User>(environment.API + '/get-user', { headers });
  }

  public login(user: User): Observable<string> {
    return this.http.post<string>(environment.API + '/login', user);
  }

  public getUser(): Observable<User> {
    const headers = this.getHeaderAuthorization();
    return this.http.get<User>(environment.API + '/get-user', this.getHeaderAuthorization());
  }

  public forgotPassword(user: User): Observable<User> {
    return this.http.post<User>(environment.API + '/forgot-password', user);
  }

  public updatePassword(password: string, token: string): Observable<User> {
    const headers = { 'Authorization': `Bearer ${token}`};
    return this.http.put<User>(environment.API + '/update-password', { password }, { headers });
  }
}
