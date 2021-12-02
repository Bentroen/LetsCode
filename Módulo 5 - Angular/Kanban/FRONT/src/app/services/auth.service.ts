import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:5000/login/";
  currentUserToken: string = '';

  constructor(private http: HttpClient) {
    //this.currentUserSubject = new BehaviorSubject<User>
    //this.currentUser = this.currentUserSubject.asObservable();
    let token = localStorage.getItem('currentUser');
    this.currentUserToken = token ? token : '';
  }

  login(username: string, password: string) {
    let headers = new HttpHeaders({'Accept': 'text/plain', 'Content-Type': 'application/json'});
    let body = {login: username, senha: password}
    return this.http.post<string | null>(this.baseUrl, body, {headers: headers})
      .pipe(map((token: string | null) => {
        let tokenString = token != null ? token : '';
        localStorage.setItem('currentUser', tokenString);
        //this.currentUserSubject.next(user);
        this.currentUserToken = tokenString;
        console.log(this.currentUserToken);
        return tokenString;
      }))
  }

  logout() {
    //this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.currentUserToken = '';
  }
}
