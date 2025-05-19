export interface Experiencia {
  id_experiencia: number;
  titulo: string;
  descripcion: string;
  url_imagenes: string[];
  precio_por_persona: number;
  direccion: string;
  tiene_cupo: boolean;
}
