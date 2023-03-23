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

  habilidades : Habilidad[]=[];

  constructor( private sHabilidad: HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidades();
  }

  cargarHabilidades():void{
    this.sHabilidad.listarHabilidad().subscribe(data =>{this.habilidades=data})
  }

}
