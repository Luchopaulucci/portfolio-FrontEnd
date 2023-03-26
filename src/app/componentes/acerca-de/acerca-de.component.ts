import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercadeServiceService } from 'src/app/servicios/acercade.service.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  perfil: Persona[]=[];

  constructor(private sPersona: AcercadeServiceService) { }
  ngOnInit(): void {
    this.cargarPersona();
    }

  cargarPersona():void{
    this.sPersona.listarPersonas().subscribe(data =>{this.perfil=data})
  }

  delete(id:number){
    if(confirm("Seguro desea eliminar esta Habilidad")){
      this.sPersona.borrarPersona(id).subscribe(
        data => {
        this.cargarPersona();
      }, err => {
        alert("Se ha producido un error, intente nuevamente");
      });
    }
  }

}


