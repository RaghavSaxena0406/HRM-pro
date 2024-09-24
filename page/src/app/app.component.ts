import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { OptionComponent } from './option/option.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponent,OptionComponent,LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'page';
  constructor(private router:Router){}
}

