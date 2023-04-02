import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercadeServiceService } from 'src/app/servicios/acercade.service.service';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  perfil: Persona[] = [];
  modoEdit: any;

  constructor(
    private sPersona: AcercadeServiceService,
    private authService: AutenticacionService
  ) {}
  ngOnInit(): void {
    this.cargarPersona();
    if (sessionStorage.getItem('currentUser') == 'null') {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarPersona(): void {
    this.sPersona.listarPersonas().subscribe((data) => {
      this.perfil = data;
    });
  }

  delete(id: number) {
    if (confirm('Seguro desea eliminar esta Habilidad')) {
      this.sPersona.borrarPersona(id).subscribe(
        (data) => {
          this.cargarPersona();
        },
        (err) => {
          alert('Se ha producido un error, intente nuevamente');
        }
      );
    }
  }
}
