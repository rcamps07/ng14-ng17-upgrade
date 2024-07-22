import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:

    // Need to register in shell webpack.config.js in order to use path below:
    // {
    //   path: 'flights',
    //   loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    // },

    // Dynamically loading MFE option. 'type: 'module' is needed for Angular 13 or higher as beginning with version 13, the CLI emits EcmaScript modules instead of "plain old" JavaScript files.'
    {
      path: 'flights',
      loadChildren: () =>
           loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              exposedModule: './Module'
          })
          .then(m => m.FlightsModule)
  },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

