import { Component } from '@angular/core';
import { Experiencia } from '../../core/models/experiencia.model';
import { ExperienciaService } from '../../core/services/experiencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.css'
})
export class ExperienceDetailComponent {
  public experiencia : Experiencia | null = null;

  constructor(private experienciaService: ExperienciaService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.experiencia = this.experienciaService.getExperienciaById(parseInt(params["id"]));
      console.log(this.experiencia);
    });
  }
}
