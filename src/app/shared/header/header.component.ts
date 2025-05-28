import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService, Usuario } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public abrirMenu: boolean = false;
  public logueado: boolean = false;
  public usuarioLogueado: Usuario | null = null;
  public inicialesUsuario: string = '';

  constructor(private authService: AuthService) {

  }
  
  ngOnInit(): void {
    let usuario = localStorage.getItem("usuario_logueado");

    if (!usuario) {
      this.logueado = false;
    }
    
    else {
      this.logueado = true;
      this.usuarioLogueado = JSON.parse(usuario!);
      let primeraLetraNombre = this.usuarioLogueado?.firstName.trim().charAt(0).toUpperCase();
      let primeraLetraApellido = this.usuarioLogueado?.lastName.trim().charAt(0).toUpperCase();

      if (primeraLetraNombre == undefined || primeraLetraApellido == undefined) {
        this.inicialesUsuario = '';
      } else {
        this.inicialesUsuario = (primeraLetraNombre + primeraLetraApellido).toUpperCase();
      }
    }
  }

  public handleLogout() {
    this.authService.logout();
    location.reload();
  }
  
  public toggleMenu(): void {
    this.abrirMenu = !this.abrirMenu;
  }
}
