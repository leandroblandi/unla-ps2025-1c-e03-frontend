import { Injectable } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';
import { AlojamientoService } from './alojamiento.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private readonly STORAGE_KEY = 'favoritos_ids';

  constructor(private alojamientoService: AlojamientoService) { }

  /**
   * Agrega un alojamiento a favoritos por ID
   */
  public agregarFavorito(id: number): void {
    const ids = this.getFavoritosIds();
    if (!ids.includes(id)) {
      ids.push(id);
      this.guardarFavoritos(ids);
    }
  }

  /**
   * Elimina un alojamiento de favoritos por ID
   */
  public eliminarFavorito(id: number): void {
    const ids = this.getFavoritosIds().filter(favId => favId !== id);
    this.guardarFavoritos(ids);
  }

  /**
   * Devuelve los IDs de alojamientos marcados como favoritos
   */
  public getFavoritosIds(): number[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    try {
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error al leer favoritos del localStorage', e);
      return [];
    }
  }

  /**
   * Guarda la lista de IDs en localStorage
   */
  private guardarFavoritos(ids: number[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
  }

  /**
   * Devuelve la lista de alojamientos favoritos como objetos completos
   */
  public getAlojamientosFavoritos(): Alojamiento[] {
    return this.getFavoritosIds()
      .map(id => this.alojamientoService.getAlojamientoById(id))
      .filter((alojamiento): alojamiento is Alojamiento => alojamiento !== null);
  }

  /**
   * Verifica si un alojamiento está marcado como favorito
   */
  public esFavorito(id: number): boolean {
    return this.getFavoritosIds().includes(id);
  }
}