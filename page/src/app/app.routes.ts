import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { OptionComponent } from './option/option.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    { path:'',component:FirstComponent},
    { path:'option', component: OptionComponent},
    { path:'login',component:LoginComponent},
    { path:'register', component:RegisterComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
