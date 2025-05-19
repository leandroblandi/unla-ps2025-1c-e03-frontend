import { Component } from '@angular/core';
import { Experiencia } from '../../core/models/experiencia.model';
import { ExperienciaService } from '../../core/services/experiencia.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-experiences',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-experiences.component.html',
  styleUrl: './all-experiences.component.css'
})
export class AllExperiencesComponent {
  public experiencias: Experiencia[] = [];
  
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit() {
    this.getExperiencias();
  }

  public getExperiencias() {
    this.experiencias = this.experienciaService.getExperiencias();
  }
}
