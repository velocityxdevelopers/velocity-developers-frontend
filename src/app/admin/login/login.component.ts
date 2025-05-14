import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
    constructor(private http: HttpClient,private router:Router) {}
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  alertMessage: string = '';

  showAlert(message: string) {
    this.alertMessage = message;

    setTimeout(() => {
      this.alertMessage = '';
    }, 3000); // auto-hide after 3 seconds
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post<{ token: string; admin: string; loginTime: string }>('http://localhost:3001/velocityxdev/dnk1/admin/login',this.loginForm.value).subscribe({
        next: (res) => {
          sessionStorage.setItem('authToken', res.token);
          sessionStorage.setItem('admin', res.admin);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
           alert('Login failed: ' + err.error.message || 'Something went wrong');
        }
      });
    } else {
      this.loginForm.markAllAsTouched(); // Trigger validation messages
    }
  }
}