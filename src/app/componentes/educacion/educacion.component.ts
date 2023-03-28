import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EducacionServiceService } from 'src/app/servicios/educacion.service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];
  modoEdit: any;

  constructor(
    private sEducacion: EducacionServiceService,
    private authService: AutenticacionService
  ) {}

  ngOnInit(): void {
    this.cargarEducacion();
    if(sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    } else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.listarEducacion().subscribe((data) => {
      this.educaciones = data;
    });
  }

  delete(id: number) {
    if (confirm('Seguro desea eliminar esta Habilidad')) {
      this.sEducacion.borrarEducacion(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert('Se ha producido un error, intente nuevamente');
        }
      );
    }
  }
}
