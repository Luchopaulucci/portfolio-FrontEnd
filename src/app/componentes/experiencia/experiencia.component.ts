import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia.service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  modoEdit: any;

  constructor(
    private sExperiencia: ExperienciaServiceService,
    private authService: AutenticacionService
  ) {}

  ngOnInit(): void {
    this.cargarExperiencia();
    if (sessionStorage.getItem('currentUser') == 'null') {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.listarExperiencias().subscribe((data) => {
      this.experiencias = data;
    });
  }

  delete(id: number) {
    if (confirm('Seguro desea eliminar esta Habilidad')) {
      this.sExperiencia.borrarExperiencia(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('Se ha producido un error, intente nuevamente');
        }
      );
    }
  }
}
