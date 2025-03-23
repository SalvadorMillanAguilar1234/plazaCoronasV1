import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';


import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { firebaseApp } from './firebase.config';

// Verificar que Firebase se inicializó antes de arrancar Angular
(async () => {
  try {
    console.log('Inicializando Firebase...');
    
    await Promise.resolve(firebaseApp); // Asegura que Firebase se inicialice// Espera a que Firebase se configure antes de arrancar Angular
    console.log('Firebase inicializado correctamente.');
    bootstrapApplication(AppComponent, {
      providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes, withPreloading(PreloadAllModules)),
        
      ],
    });
  } catch (error) {
    console.error('Error al inicializar Firebase', error);
  }
})();
