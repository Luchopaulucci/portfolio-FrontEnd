import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosServiceService } from 'src/app/servicios/proyectos.service.service';
import { Proyectos } from 'src/app/model/proyectos';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  modoEdit: any;

  constructor(
    private sProyecto: ProyectosServiceService,
    private authService: AutenticacionService
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
    if (sessionStorage.getItem('currentUser') == 'null') {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarProyectos(): void {
    this.sProyecto.listarProyectos().subscribe((data) => {
      this.proyectos = data;
    });
  }

  delete(id: number) {
    if (confirm('Seguro desea eliminar esta Habilidad')) {
      this.sProyecto.borrarProyectos(id).subscribe(
        (data) => {
          this.cargarProyectos();
        },
        (err) => {
          alert('Se ha producido un error, intente nuevamente');
        }
      );
    }
  }
}
