import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion.service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[]=[]

  constructor(private sEducacion: EducacionServiceService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion():void{
    this.sEducacion.listarEducacion().subscribe(data =>{this.educaciones=data})
  }

  delete(id:number){
    if(confirm("Seguro desea eliminar esta Habilidad")){
      this.sEducacion.borrarEducacion(id).subscribe(
        data => {
        this.cargarEducacion();
      }, err => {
        alert("Se ha producido un error, intente nuevamente");
      });
    }
  }

}
