import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading: boolean = false;
  isMouseOver = false;
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    if (!localStorage.getItem('password')) {
      localStorage.setItem('password', '1234');
    }
  }

  redirectToResetPasswordPage() {
    this.router.navigate(['/cambio-contrasena']); 
  }

  ingresar(): void {
    const storedPassword = localStorage.getItem('password');
    if (this.usuario === 'sandra' && this.contrasena === storedPassword) {
      this.router.navigate(['/home'], { queryParams: { usuario: this.usuario } });
      setTimeout(() => {
        this.isLoading = false; 
      }, 9000);
    } else {
      console.log('Credenciales inválidas.');
      this.mostrarAlerta('Credenciales inválidas.');
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Contraseña Erronea',
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  changeColor(over: boolean) {
    this.isMouseOver = over;
  }
  
}







