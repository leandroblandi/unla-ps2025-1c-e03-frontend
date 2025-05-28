import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../core/services/favorito.service';
import { Alojamiento } from '../../core/models/alojamiento.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.css'
})
export class FavoritesListComponent implements OnInit {
  public favoritos: Alojamiento[] = [];


  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.getFavoritos();
  }

  getFavoritos() {
    this.favoritos = this.favoritosService.getAlojamientosFavoritos();
  }
}
