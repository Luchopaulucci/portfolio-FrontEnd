import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList:any;
  habilidades : Habilidad[]=[];
  constructor(private datosPortfolio:ServicioService, private sHabilidad:HabilidadService) { }

  ngOnInit(): void {
    /* this.cargarHabilidad();
    this.datosPortfolio.getDatos().subscribe(data=>{
      console.log(data);

      this.skillsList=data.skills;

    }); */

  }

  /* cargarHabilidad():void{
    this.sHabilidad.list().subscribe(data=> {this.habilidades=data})
  } */

}
