import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly jwtKey = 'jwt';
  private isLoggedIn = false;

  constructor() { }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem(this.jwtKey)) {
      return true;
    } else {
      return false;
    }
  }

  getUsernameFromJWT(): string {
    const jwt = localStorage.getItem(this.jwtKey);
    if (jwt) {
      const token = jwt.split('.');
      const json = JSON.parse(atob(token[1]));
      return json.name;
    } else {
      return null;
    }
  }

  getJwtToken() {
    const jwt = localStorage.getItem(this.jwtKey);
    if (jwt) {
      return jwt;
    } else {
      return null;
    }
  }
}
