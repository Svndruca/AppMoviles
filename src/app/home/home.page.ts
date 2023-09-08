import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading: boolean = false;
  currentPage: string = 'RegistrQR';
  usuario: string = '';

  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['usuario']) {
        this.usuario = params['usuario'];
      }
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  redirectTo(page: string) {
    this.menuCtrl.close();
    this.router.navigate([page], { queryParams: { usuario: this.usuario } });
    this.currentPage = page === 'estudiante' ? 'Estudiante' : 'Escanear QR';
  }

  redireccionarAHome() {
    this.isLoading = true; 

    setTimeout(() => {
      this.isLoading = false;
    }, 9000); // segundos
  }
}



















