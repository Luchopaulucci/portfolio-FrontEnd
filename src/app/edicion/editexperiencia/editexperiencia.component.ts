import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia.service.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css'],
})
export class EditexperienciaComponent implements OnInit {
  form: FormGroup;
  experiencia: Experiencia = null;

  constructor(
    private formBuilder: FormBuilder,
    private sExperiencia: ExperienciaServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      area: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
    });
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Area() {
    return this.form.get('area');
  }

  get Desde() {
    return this.form.get('desde');
  }

  get Hasta() {
    return this.form.get('hasta');
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.findExperiencia(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar la habilidad")
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.modificarExperiencia(id, this.experiencia).subscribe(
      data => {
        this.router.navigate([''])
      }, err =>{
        alert("Error al modificar la habilidad")
        this.router.navigate(['']);
      }
    )
  }
}
