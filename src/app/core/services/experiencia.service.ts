import { Injectable } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  public MOCK_EXPERIENCIAS: Experiencia[] = [
  {
    id_experiencia: 1,
    titulo: 'Sesión de fotos profesional en el Obelisco',
    descripcion: 'Un fotógrafo profesional te guía por los mejores ángulos del Obelisco y alrededores.',
    url_imagenes: [
      "https://images.pexels.com/photos/10618094/pexels-photo-10618094.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 45,
    direccion: 'Av. 9 de Julio 500, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 2,
    titulo: 'Clase de tango con milonga incluida',
    descripcion: 'Aprendé los pasos básicos del tango y disfrutá una noche en una auténtica milonga porteña.',
    url_imagenes: [
      "https://images.pexels.com/photos/270789/pexels-photo-270789.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 60,
    direccion: 'San Telmo, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 3,
    titulo: 'Recorrido gastronómico por Palermo',
    descripcion: 'Degustación de platos típicos argentinos en los mejores bares y restaurantes de Palermo.',
    url_imagenes: [
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 75,
    direccion: 'Palermo Soho, Buenos Aires',
    tiene_cupo: false
  },
  {
    id_experiencia: 4,
    titulo: 'Tour en bicicleta por la Costanera',
    descripcion: 'Pedaleá por la costanera con vistas increíbles del Río de la Plata.',
    url_imagenes: [
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 30,
    direccion: 'Costanera Sur, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 5,
    titulo: 'Experiencia en estancia con asado criollo',
    descripcion: 'Visitá una estancia y disfrutá un asado argentino acompañado de folklore.',
    url_imagenes: [
      "https://images.pexels.com/photos/32178883/pexels-photo-32178883/free-photo-of-juicy-raw-meat-on-outdoor-grill-with-smoky-flavor.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 120,
    direccion: 'Luján, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 6,
    titulo: 'Paseo en barco por el Delta del Tigre',
    descripcion: 'Navegá por los canales del Tigre con guía turística incluida.',
    url_imagenes: [
      "https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 55,
    direccion: 'Tigre, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 7,
    titulo: 'Clase de cocina argentina con chef local',
    descripcion: 'Aprendé a preparar empanadas, locro y dulce de leche casero.',
    url_imagenes: [
      "https://images.pexels.com/photos/12673631/pexels-photo-12673631.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
    ],
    precio_por_persona: 80,
    direccion: 'Recoleta, Buenos Aires',
    tiene_cupo: false
  },
  {
    id_experiencia: 8,
    titulo: 'Caminata urbana con historia y arquitectura',
    descripcion: 'Descubrí la historia de Buenos Aires en una caminata por el centro histórico.',
    url_imagenes: [
      "https://images.pexels.com/photos/1060803/pexels-photo-1060803.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 35,
    direccion: 'Microcentro, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 9,
    titulo: 'Taller de cerámica en estudio artesanal',
    descripcion: 'Manos a la obra en un taller de cerámica con artistas locales.',
    url_imagenes: [
      "https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 65,
    direccion: 'Villa Crespo, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 10,
    titulo: 'Tour fotográfico nocturno',
    descripcion: 'Capturá la magia nocturna de la ciudad con un fotógrafo profesional.',
    url_imagenes: [
      "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 50,
    direccion: 'Puerto Madero, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 11,
    titulo: 'Excursión al Parque Nacional Ciervo de los Pantanos',
    descripcion: 'Día completo de caminatas, avistaje de fauna y picnic en la naturaleza.',
    url_imagenes: [
      "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 90,
    direccion: 'Campana, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 12,
    titulo: 'Clase de mate y charla cultural',
    descripcion: 'Todo sobre la historia y la preparación del mate, con degustación incluida.',
    url_imagenes: [
      "https://images.pexels.com/photos/1192655/pexels-photo-1192655.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 25,
    direccion: 'Barracas, Buenos Aires',
    tiene_cupo: true
  },
  {
    id_experiencia: 13,
    titulo: 'Pintada de mural colaborativo con artistas urbanos',
    descripcion: 'Sumate a pintar un mural con artistas locales y dejá tu huella en la ciudad.',
    url_imagenes: [
      "https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 40,
    direccion: 'La Boca, Buenos Aires',
    tiene_cupo: false
  },
  {
    id_experiencia: 14,
    titulo: 'Yoga al aire libre en los Bosques de Palermo',
    descripcion: 'Conectá cuerpo y mente en una clase de yoga rodeada de naturaleza.',
    url_imagenes: [
      "https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    precio_por_persona: 35,
    direccion: 'Bosques de Palermo, Buenos Aires',
    tiene_cupo: true
  }
];

  constructor() { }

  public getExperiencias(): Experiencia[] {
    return this.MOCK_EXPERIENCIAS;
  }

  public getExperienciaById(id: number): Experiencia | null {
    let experienciaEncontrada = null;
    
    for (let experiencia of this.MOCK_EXPERIENCIAS) {
      if (experiencia.id_experiencia == id) {
        experienciaEncontrada = experiencia;
        break;
      }
    }

    return experienciaEncontrada;
  }
}