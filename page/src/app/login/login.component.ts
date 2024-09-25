import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  loginObj: Login;
  private readonly RootUri = "http://localhost:8080"; // Made the URL readonly

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    const params = new HttpParams()
      .set('username', this.loginObj.Email) // Assuming Email is the username
      .set('passkey', this.loginObj.password);

    this.http.post(`${this.RootUri}/log`, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe({
      next: (res: any) => {
        console.log("Response received:", res);
        // Assuming the server returns a message indicating success
        if (res.message === "Login successful") {
          console.log("Login Successful");
          this.router.navigate(['/']);  // Redirect to the home page or desired route
        } else {
          console.log("Login Failed");
          alert(res.message); // Show the error message
        }
      },
      error: (err) => {
        console.error("Login failed", err);
        alert(`Login failed: ${err.error.message || 'Unknown error'}`);
      }
    });
  }
}

export class Login {
  Email: string;
  password: string;
  remember: boolean;

  constructor() {
    this.Email = '';
    this.password = '';
    this.remember = false;
  }
}
