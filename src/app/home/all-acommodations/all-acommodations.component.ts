import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from '../../core/services/alojamiento.service';
import { Alojamiento } from '../../core/models/alojamiento.model';
import { Router, RouterLink } from '@angular/router';
import { FavoritosService } from '../../core/services/favorito.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private alojamientoService: AlojamientoService, public favoritosService: FavoritosService, private toast: ToastrService) { }

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
      this.toast.info("Se ha eliminado el elemento de los favoritos");
      this.favoritosService.eliminarFavorito(id);
    } else {
      this.toast.success("Se ha agregado el elemento a los favoritos");
      this.favoritosService.agregarFavorito(id);
    }
  }
}
