import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css'],
})
export class AddskillComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sHabilidad: HabilidadService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  ngOnInit(): void {}

  get Titulo() {
    return this.form.get('titulo');
  }

  get Porcentaje() {
    return this.form.get('porcentaje');
  }

  onCreate(): void {
    this.sHabilidad.crearHabilidad(this.form.value).subscribe(
      data => {
        alert('Habilidad Añadida');
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo")
      this.router.navigate(['']);
    }
    )
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onCreate();
    } else {
      alert('Se produjo un error al enviar el formulario! Revise los datos ingresados.');
      this.form.markAllAsTouched();
    }
  }

  limpiar(): void {
    this.form.reset();
  }

}