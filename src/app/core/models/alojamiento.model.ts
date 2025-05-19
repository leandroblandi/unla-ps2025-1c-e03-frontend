export interface Alojamiento {
  id_alojamiento: number;
  titulo: string;
  descripcion: string;
  url_imagenes: string[];
  direccion: string;
  precio_por_noche: number;
  capacidad_personas: number;
  disponible: boolean;
}
