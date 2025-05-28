import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  logueado: boolean = false;
  usuario: Usuario | null = null;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    let usuario = localStorage.getItem("usuario_logueado");

    if (!usuario) {
      this.logueado = false;
      this.router.navigate(['/acommodations'])
    }
    
    else {
      this.logueado = true;
      this.usuario = JSON.parse(usuario);
    }
  }
}
