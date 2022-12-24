import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:any;

  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {

    this.datosPortfolio.getDatos().subscribe(data=>{
      console.log(data);

      this.experienciaList=data.experiencia;

    });

  }

}
