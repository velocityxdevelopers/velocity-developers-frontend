import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = sessionStorage.getItem('authToken');  // or 'isLoggedIn'

    if (user) {
      // User logged in, allow access
      return true;
    } else {
      // Not logged in, redirect to login
      this.router.navigate(['/admin-login-page-velocity-x-dev']);
      return false;
    }
  }
}
