import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion.service.service';

@Component({
  selector: 'app-editestudio',
  templateUrl: './editestudio.component.html',
  styleUrls: ['./editestudio.component.css'],
})
export class EditestudioComponent implements OnInit {
  form: FormGroup;
  estudio: Educacion = null;

  constructor(
    private formBuilder: FormBuilder,
    private sEstudio: EducacionServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
    });
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Institucion() {
    return this.form.get('institucion');
  }

  get Desde() {
    return this.form.get('desde');
  }

  get Hasta() {
    return this.form.get('hasta');
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.findEducacion(id).subscribe(
      (data) => {
        this.estudio = data;
      },
      (err) => {
        alert('Error al modificar la habilidad');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.modificarEducacion(id, this.estudio).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la habilidad');
        this.router.navigate(['']);
      }
    );
  }
}
