import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;

  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {

    this.datosPortfolio.getDatos().subscribe(data=>{
      console.log(data);

      this.educacionList=data.educacion;

    });

  }

}
