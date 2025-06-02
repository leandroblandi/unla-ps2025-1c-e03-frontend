import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../../core/models/alojamiento.model';
import { AlojamientoService } from '../../core/services/alojamiento.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acommodation-detail',
  standalone: true,
  imports: [],
  templateUrl: './acommodation-detail.component.html',
  styleUrl: './acommodation-detail.component.css'
})
export class AcommodationDetailComponent implements OnInit {
  public alojamiento : Alojamiento | null = null;

  constructor(private alojamientoService: AlojamientoService, private route: ActivatedRoute, private toastService: ToastrService) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.alojamiento = this.alojamientoService.getAlojamientoById(parseInt(params["id"]));
    });
  }

  showConfirm() {
    this.toastService.success("En los próximos minutos, recibirás un mail con la confirmación de la reserva", "Reservaste con éxito esta propiedad");
  }
}
