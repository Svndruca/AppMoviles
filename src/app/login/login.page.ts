import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Agregamos el import para el enrutador

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { } // Inyectamos el enrutador

  ngOnInit() {
  }

  redirectToResetPasswordPage() {
    // Redirige a la página de restablecimiento de contraseña
    this.router.navigate(['/reset-password']); // Ajusta la ruta según tu configuración
  }
}

