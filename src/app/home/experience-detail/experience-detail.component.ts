import { Component } from '@angular/core';
import { Experiencia } from '../../core/models/experiencia.model';
import { ExperienciaService } from '../../core/services/experiencia.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.css'
})
export class ExperienceDetailComponent {
  public experiencia : Experiencia | null = null;

  constructor(private experienciaService: ExperienciaService, private route: ActivatedRoute, private toastService: ToastrService) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.experiencia = this.experienciaService.getExperienciaById(parseInt(params["id"]));
      console.log(this.experiencia);
    });
  }

  showConfirm() {
    this.toastService.success("En los próximos minutos, recibirás un mail con la confirmación de la reserva", "Reservaste con éxito un cupo de esta experiencia");
  }
}
