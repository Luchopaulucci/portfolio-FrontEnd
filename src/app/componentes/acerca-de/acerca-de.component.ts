import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  perfil:any;

  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data=>{
      console.log(data);

      this.perfil=data;

    });

    
  }

}
