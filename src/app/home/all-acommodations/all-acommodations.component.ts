import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from '../../core/services/alojamiento.service';
import { Alojamiento } from '../../core/models/alojamiento.model';
import { Router, RouterLink } from '@angular/router';
import { FavoritosService } from '../../core/services/favorito.service';

@Component({
  selector: 'app-all-acommodations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-acommodations.component.html',
  styleUrl: './all-acommodations.component.css'
})
export class AllAcommodationsComponent implements OnInit {
  public alojamientos: Alojamiento[] = [];
  public logueado: boolean = false;



  constructor(private alojamientoService: AlojamientoService, public favoritosService: FavoritosService) { }

  ngOnInit() {
    this.getAlojamientos();

    let usuario = localStorage.getItem("usuario_logueado");

    if (!usuario) {
      this.logueado = false;
    }
    
    else {
      this.logueado = true;
    }
  }

  public getAlojamientos() {
    this.alojamientos = this.alojamientoService.getAlojamientos();
  }

  handleFavorite(id: number) {
    if (this.favoritosService.esFavorito(id)) {
      this.favoritosService.eliminarFavorito(id);
    } else {
      this.favoritosService.agregarFavorito(id);
    }
  }
}
