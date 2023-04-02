import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { AcercadeServiceService } from 'src/app/servicios/acercade.service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logueado: any;
  index: any;
  personas: Persona[]=[]

  constructor(private servicePersona: AcercadeServiceService) { }

  ngOnInit(): void {
    this.lista();

    if (sessionStorage.getItem('currentUser') == "null") {
      this.logueado = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.logueado = false;
    } else {
      this.logueado = true;
    }

    if(window.location.href == "https://portfolio-frontend-luciano.web.app/login"){
      this.index = false;
    } else{
        this.index = true;
    }
  }

  lista():void{
    this.servicePersona.listarPersonas().subscribe(data => {this.personas=data});
  }

  redirect(pagina:string){
    window.location.href=pagina
  }

}
