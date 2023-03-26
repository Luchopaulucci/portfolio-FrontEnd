import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosServiceService } from 'src/app/servicios/proyectos.service.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[]=[];

  constructor(private sProyecto: ProyectosServiceService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos():void{
    this.sProyecto.listarProyectos().subscribe(data =>{this.proyectos=data})
  }

  delete(id:number){
    if(confirm("Seguro desea eliminar esta Habilidad")){
      this.sProyecto.borrarProyectos(id).subscribe(
        data => {
        this.cargarProyectos();
      }, err => {
        alert("Se ha producido un error, intente nuevamente");
      });
    }
  }

}
