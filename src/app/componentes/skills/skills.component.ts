import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList:any;

  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {

    this.datosPortfolio.getDatos().subscribe(data=>{
      console.log(data);

      this.skillsList=data.skills;

    });

  }

}
