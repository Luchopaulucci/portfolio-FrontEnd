import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  habilidades: Habilidad[] = [];
  modoEdit: any;

  constructor(
    private sHabilidad: HabilidadService,
    private authService: AutenticacionService
  ) {}

  ngOnInit(): void {
    this.cargarHabilidades();
    if (sessionStorage.getItem('currentUser') == 'null') {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarHabilidades(): void {
    this.sHabilidad.listarHabilidad().subscribe((data) => {
      this.habilidades = data;
    });
  }

  delete(id: number) {
    if (confirm('Seguro desea eliminar esta Habilidad')) {
      this.sHabilidad.borrarHabilidad(id).subscribe(
        (data) => {
          this.cargarHabilidades();
        },
        (err) => {
          alert('Se ha producido un error, intente nuevamente');
        }
      );
    }
  }
}
