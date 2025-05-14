import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AllAcommodationsComponent } from './home/all-acommodations/all-acommodations.component';
import { AllExperiencesComponent } from './home/all-experiences/all-experiences.component';

export const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "all-acommodations",
    component: AllAcommodationsComponent
  },
  {
    path: "all-experiences",
    component: AllExperiencesComponent
  }
];
