import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { min } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css'],
})
export class EditskillComponent implements OnInit {
  form: FormGroup
  habilidad: Habilidad = null;

  constructor(
    private formBuilder: FormBuilder,
    private sHabilidad: HabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      urlFotoHabilidad: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.findHabilidad(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar la habilidad")
        this.router.navigate(['']);
      }
    )
  }

  get Titulo() {
    return this.form.get('titulo');
  }
  get UrlFotoHabilidad() {
    return this.form.get('urlFotoHabilidad');
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.modificarHabilidad(id, this.habilidad).subscribe(
      data => {
        this.router.navigate([''])
      }, err =>{
        alert("Error al modificar la habilidad")
        this.router.navigate(['']);
      }
    )
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onUpdate();
    } else {
      alert('Se produjo un error al enviar el formulario! Revise los datos ingresados.');
      this.form.markAllAsTouched();
    }
  }
}
