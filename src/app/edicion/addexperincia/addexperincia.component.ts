import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia.service.service';

@Component({
  selector: 'app-addexperincia',
  templateUrl: './addexperincia.component.html',
  styleUrls: ['./addexperincia.component.css'],
})
export class AddexperinciaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sExperiencia: ExperienciaServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      area: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
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

  onCreate(): void {
    this.sExperiencia.crearExperiencia(this.form.value).subscribe(data => {
      alert('Experiencia Añadida');
      this.router.navigate(['']);
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onCreate();
    } else {
      alert(
        'Se produjo un error al enviar el formulario! Revise los datos ingresados.'
      );
      this.form.markAllAsTouched();
    }
  }

}
