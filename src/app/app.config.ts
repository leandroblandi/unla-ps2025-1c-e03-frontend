import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

/**
 * 
 * Esta es la configuración de la aplicación.
 * 
 * Se pueden registrar características como el enrutamiento, cliente HTTP para consumir APIs
 * e incluso interceptores
 * 
 */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())
  ]
};
