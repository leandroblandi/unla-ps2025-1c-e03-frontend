import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from '../../core/services/alojamiento.service';
import { Alojamiento } from '../../core/models/alojamiento.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-acommodations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-acommodations.component.html',
  styleUrl: './all-acommodations.component.css'
})
export class AllAcommodationsComponent implements OnInit {
  public alojamientos: Alojamiento[] = [];
  
  constructor(private alojamientoService: AlojamientoService) { }

  ngOnInit() {
    this.getAlojamientos();
  }

  public getAlojamientos() {
    this.alojamientos = this.alojamientoService.getAlojamientos();
  }
}
