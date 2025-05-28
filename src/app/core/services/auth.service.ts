import { Injectable } from '@angular/core';

export interface Usuario {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private key = 'usuarios';
  private sessionKey = 'usuarioLogueado';

  constructor() {}

  private getUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  private saveUsuarios(usuarios: Usuario[]) {
    localStorage.setItem(this.key, JSON.stringify(usuarios));
  }

  register(usuario: Usuario): boolean {
    const usuarios = this.getUsuarios();
    const existe = usuarios.some(u => u.email === usuario.email);
    if (existe) return false;
    usuarios.push(usuario);
    this.saveUsuarios(usuarios);
    return true;
  }

  login(email: string, password: string): boolean {
    const usuarios = this.getUsuarios();
    const usuario = usuarios.find(u => u.username === email && u.password === password);
    if (!usuario) return false;
    localStorage.setItem(this.sessionKey, JSON.stringify(usuario));
    return true;
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.sessionKey);
  }

  getUsuarioLogueado(): Usuario | null {
    return JSON.parse(localStorage.getItem(this.sessionKey) || 'null');
  }
}