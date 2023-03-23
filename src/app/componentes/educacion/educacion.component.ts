import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion.service.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

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

}
