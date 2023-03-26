import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionServiceService } from 'src/app/servicios/educacion.service.service';

@Component({
  selector: 'app-addestudio',
  templateUrl: './addestudio.component.html',
  styleUrls: ['./addestudio.component.css'],
})
export class AddestudioComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sEducacion: EducacionServiceService
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

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

  onCreate(): void {
    this.sEducacion.crearEducacion(this.form.value).subscribe((data) => {
      alert('Estudio Añadido');
      window.location.reload();
    });
  }

  limpiar(): void {
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
