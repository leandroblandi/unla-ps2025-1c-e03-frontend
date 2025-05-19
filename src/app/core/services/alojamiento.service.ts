import { Injectable } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  private MOCK_ALOJAMIENTOS: Alojamiento[] = [
  {
    id_alojamiento: 1,
    titulo: "Loft moderno en Palermo",
    descripcion: "Amplio loft con decoración minimalista, ideal para parejas.",
    url_imagenes: [
      "https://example.com/images/loft_palermo_1.jpg",
      "https://example.com/images/loft_palermo_2.jpg"
    ],
    direccion: "Gorriti 5500, Palermo, CABA",
    precio_por_noche: 75.0,
    capacidad_personas: 2,
    disponible: true
  },
  {
    id_alojamiento: 2,
    titulo: "Departamento con vista al Obelisco",
    descripcion: "Ubicado en el corazón de la ciudad, con vistas panorámicas.",
    url_imagenes: [
      "https://example.com/images/obelisco_1.jpg",
      "https://example.com/images/obelisco_2.jpg"
    ],
    direccion: "Av. Corrientes 1500, San Nicolás, CABA",
    precio_por_noche: 90.0,
    capacidad_personas: 4,
    disponible: true
  },
  {
    id_alojamiento: 3,
    titulo: "Casa colonial en San Telmo",
    descripcion: "Encantadora casa con patio interno y detalles históricos.",
    url_imagenes: [
      "https://example.com/images/san_telmo_1.jpg",
      "https://example.com/images/san_telmo_2.jpg"
    ],
    direccion: "Defensa 800, San Telmo, CABA",
    precio_por_noche: 120.0,
    capacidad_personas: 5,
    disponible: false
  },
  {
    id_alojamiento: 4,
    titulo: "Apartamento frente al mar en Montevideo",
    descripcion: "Disfrutá de la brisa marina desde el balcón privado.",
    url_imagenes: [
      "https://example.com/images/montevideo_mar_1.jpg",
      "https://example.com/images/montevideo_mar_2.jpg"
    ],
    direccion: "Rambla República del Perú 1234, Montevideo",
    precio_por_noche: 110.0,
    capacidad_personas: 3,
    disponible: true
  },
  {
    id_alojamiento: 5,
    titulo: "Cabaña rústica en Tigre",
    descripcion: "Ideal para desconectar, rodeada de naturaleza.",
    url_imagenes: [
      "https://example.com/images/tigre_cabana_1.jpg",
      "https://example.com/images/tigre_cabana_2.jpg"
    ],
    direccion: "Isla del Sol, Tigre, Buenos Aires",
    precio_por_noche: 65.0,
    capacidad_personas: 2,
    disponible: true
  },
  {
    id_alojamiento: 6,
    titulo: "Penthouse en Recoleta",
    descripcion: "Lujo y confort en una de las zonas más exclusivas.",
    url_imagenes: [
      "https://example.com/images/recoleta_penthouse_1.jpg",
      "https://example.com/images/recoleta_penthouse_2.jpg"
    ],
    direccion: "Av. Alvear 1800, Recoleta, CABA",
    precio_por_noche: 200.0,
    capacidad_personas: 6,
    disponible: false
  },
  {
    id_alojamiento: 7,
    titulo: "Estudio acogedor en Pocitos",
    descripcion: "A pasos de la playa, perfecto para viajeros solitarios.",
    url_imagenes: [
      "https://example.com/images/pocitos_estudio_1.jpg",
      "https://example.com/images/pocitos_estudio_2.jpg"
    ],
    direccion: "21 de Setiembre 3000, Montevideo",
    precio_por_noche: 70.0,
    capacidad_personas: 1,
    disponible: true
  },
  {
    id_alojamiento: 8,
    titulo: "Chalet con jardín en Martínez",
    descripcion: "Espacioso y luminoso, ideal para familias.",
    url_imagenes: [
      "https://example.com/images/martinez_chalet_1.jpg",
      "https://example.com/images/martinez_chalet_2.jpg"
    ],
    direccion: "Hipólito Yrigoyen 2500, Martínez, Buenos Aires",
    precio_por_noche: 130.0,
    capacidad_personas: 5,
    disponible: true
  },
  {
    id_alojamiento: 9,
    titulo: "Duplex moderno en Ciudad Vieja",
    descripcion: "Combina historia y modernidad en pleno centro.",
    url_imagenes: [
      "https://example.com/images/ciudad_vieja_duplex_1.jpg",
      "https://example.com/images/ciudad_vieja_duplex_2.jpg"
    ],
    direccion: "Sarandí 500, Montevideo",
    precio_por_noche: 95.0,
    capacidad_personas: 4,
    disponible: false
  },
  {
    id_alojamiento: 10,
    titulo: "Loft artístico en Villa Crespo",
    descripcion: "Decorado por artistas locales, ambiente único.",
    url_imagenes: [
      "https://example.com/images/villa_crespo_loft_1.jpg",
      "https://example.com/images/villa_crespo_loft_2.jpg"
    ],
    direccion: "Av. Corrientes 6000, Villa Crespo, CABA",
    precio_por_noche: 85.0,
    capacidad_personas: 2,
    disponible: true
  },
  {
    id_alojamiento: 11,
    titulo: "Casa frente al lago en Nordelta",
    descripcion: "Vistas increíbles y todas las comodidades.",
    url_imagenes: [
      "https://example.com/images/nordelta_casa_1.jpg",
      "https://example.com/images/nordelta_casa_2.jpg"
    ],
    direccion: "Av. del Golf 100, Nordelta, Buenos Aires",
    precio_por_noche: 180.0,
    capacidad_personas: 6,
    disponible: true
  },
  {
    id_alojamiento: 12,
    titulo: "Apartamento céntrico en Montevideo",
    descripcion: "Cerca de todo, con estilo y confort.",
    url_imagenes: [
      "https://example.com/images/montevideo_centro_1.jpg",
      "https://example.com/images/montevideo_centro_2.jpg"
    ],
    direccion: "18 de Julio 1500, Montevideo",
    precio_por_noche: 80.0,
    capacidad_personas: 3,
    disponible: true
  },
  {
    id_alojamiento: 13,
    titulo: "Estancia en las afueras de Buenos Aires",
    descripcion: "Experiencia rural con todas las comodidades.",
    url_imagenes: [
      "https://example.com/images/estancia_ba_1.jpg",
      "https://example.com/images/estancia_ba_2.jpg"
    ],
    direccion: "Ruta 6 km 50, Cañuelas, Buenos Aires",
    precio_por_noche: 150.0,
    capacidad_personas: 8,
    disponible: false
  },
  {
    id_alojamiento: 14,
    titulo: "Studio minimalista en Palermo Hollywood",
    descripcion: "Diseño moderno en una ubicación privilegiada.",
    url_imagenes: [
      "https://example.com/images/palermo_hollywood_studio_1.jpg",
      "https://example.com/images/palermo_hollywood_studio_2.jpg"
    ],
    direccion: "Honduras 5600, Palermo, CABA",
    precio_por_noche: 95.0,
    capacidad_personas: 2,
    disponible: true
  }
];

  constructor() { }


  public getAlojamientos(): Alojamiento[] {
    return this.MOCK_ALOJAMIENTOS;
  }

}
