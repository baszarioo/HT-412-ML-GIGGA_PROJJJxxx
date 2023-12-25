import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { Observable, throwError  } from 'rxjs';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LocalStorageService } from 'ngx-webstorage/public_api';
import { map, tap, catchError } from 'rxjs/operators';
import { LoginResponse } from '../login/login-response.payload';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }
  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(
      'http://localhost:8080/api/auth/signup',
       signupRequestPayload,
       {responseType: 'text' });
  }
  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login', 
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        return true;
      }));
  }  
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }
  refreshToken(): Observable<LoginResponse> {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUsername()
    };
    console.log(refreshTokenPayload)
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login', refreshTokenPayload)
      .pipe(
        tap(response => {
          this.storeAuthData(response);
          console.log(`response: + ${response}`)
        }),
        catchError((error) => {
          console.error('Error during token refresh:', error);
          return throwError(error);
        })
      );
  };
  getUsername(): string | null {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken(): string | null {
    return this.localStorage.retrieve('refreshToken');
  }
  checkExpiry(): boolean {
    const expirationDate = this.localStorage.retrieve('expiresAt');
    if(!expirationDate) {
      return true;
    }
    const now=new Date().getTime() / 1000;
    const expirationTime = parseFloat(expirationDate);
    const bufferTimeInSeconds = 1;
    return expirationTime - bufferTimeInSeconds <= now;
  }
  logout() {
    const refreshToken = this.getRefreshToken();
    const username = this.getUsername();
     if(refreshToken && username) {
      this.httpClient.post('http://localhost:8080/api/auth/logout', {refreshToken, username },
      {responseType: 'text' })
        .subscribe({
          next: data => {
            console.log(data);
          },
          error(err){
            console.error('Error during logout:', err);
            throw err;
          },
        });
     }
    //  to move into substructure
     this.localStorage.clear('authenticationToken');
     this.localStorage.clear('username');
     this.localStorage.clear('refreshToken');
     this.localStorage.clear('expiresAt');
  }
  private storeAuthData(data: LoginResponse){
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('expiresAt');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('username');
    this.localStorage.store('authenticationToken', data.authenticationToken);
    this.localStorage.store('refreshToken', data.refreshToken);
    this.localStorage.store('expiresAt', data.expiresAt);
    this.localStorage.store('username', data.username);
  }
}
