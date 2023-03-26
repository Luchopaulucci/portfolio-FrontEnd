import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia.service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[]=[];

  constructor(private sExperiencia: ExperienciaServiceService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.listarExperiencias().subscribe(data =>{this.experiencias=data})
  }

  delete(id:number){
    if(confirm("Seguro desea eliminar esta Habilidad")){
      this.sExperiencia.borrarExperiencia(id).subscribe(
        data => {
        this.cargarExperiencia();
      }, err => {
        alert("Se ha producido un error, intente nuevamente");
      });
    }
  }

}
