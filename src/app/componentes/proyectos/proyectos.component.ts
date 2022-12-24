import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList:any;

  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {

    this.datosPortfolio.getDatos().subscribe(data=>{
      console.log(data);

      this.proyectosList=data.proyectos;

    });

  }

}
