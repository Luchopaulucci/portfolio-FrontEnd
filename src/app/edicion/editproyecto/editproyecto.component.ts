import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos.service.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css'],
})
export class EditproyectoComponent implements OnInit {
  form: FormGroup;
  proyecto: Proyectos = null;

  constructor(
    private formBuilder: FormBuilder,
    private sProyectos: ProyectosServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.findProyectos(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar la habilidad")
        this.router.navigate(['']);
      }
    )
  }

  get Titulo() {
    return this.form.get('titulo');
  }
  get Informacion() {
    return this.form.get('informacion');
  }
  get Desde() {
    return this.form.get('desde');
  }
  get Hasta() {
    return this.form.get('hasta');
  }
  get UrlProyecto() {
    return this.form.get('urlProyecto');
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.modificarProyectos(id, this.proyecto).subscribe(
      data => {
        this.router.navigate([''])
      }, err =>{
        alert("Error al modificar la habilidad")
        this.router.navigate(['']);
      }
    )
  }
}
