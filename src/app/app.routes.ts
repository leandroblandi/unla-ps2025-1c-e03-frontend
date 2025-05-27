import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AllAcommodationsComponent } from './home/all-acommodations/all-acommodations.component';
import { AllExperiencesComponent } from './home/all-experiences/all-experiences.component';
import { AcommodationDetailComponent } from './home/acommodation-detail/acommodation-detail.component';
import { ExperienceDetailComponent } from './home/experience-detail/experience-detail.component';


/**
 * 
 * En este array se registran las diferentes rutas de la aplicación.
 * 
 * El 'path' sería la ruta de la aplicacion, y el 'component' sería el componente/vista
 * que corresponderá con esa ruta.
 * 
 * Si se desea añadir una nueva ruta, añadir un nuevo elemento en el array con la misma estructura
 * que los demás.
 * 
 */

export const routes: Routes = [
  
  // Ruta de registro
  {
    path: "register",
    component: RegisterComponent,
  },

  // Ruta de inicio de sesión
  {
    path: "login",
    component: LoginComponent
  },

  // Ruta de listado de alojamientos
  {
    path: "acommodations",
    component: AllAcommodationsComponent
  },

  // Ruta de listado de experiencias
  {
    path: "experiences",
    component: AllExperiencesComponent
  },

  // Detalle de alojamientos
  {
    path: "acommodations/:id",
    component: AcommodationDetailComponent
  },


  // Detalle de experiencias
  {
    path: "experiences/:id",
    component: ExperienceDetailComponent
  },


  // Cualquier otra ruta, redirige a listado de experiencias
  {
    path: "**",
    redirectTo: "acommodations"
  },
];
