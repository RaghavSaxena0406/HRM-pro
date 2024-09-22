import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginObj:Login;
  constructor()
  {
    this.loginObj = new Login();
  }

  onLogin()
  {
    console.log(this.loginObj);
  }
}
export class Login{
   Email:string;
   password:string;
   remember:boolean;
   constructor()
   {
    this.Email='';
    this.password='';
    this.remember=false;
   }
}
