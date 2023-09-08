import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then((m) => m.EstudiantePageModule),
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./escanear-qr/escanear-qr.module').then((m) => m.EscanearQRPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
 
  {
    path: 'cambio-contrasena',
    loadChildren: () => import('./cambio-contrasena/cambio-contrasena.module').then( m => m.CambioContrasenaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}







