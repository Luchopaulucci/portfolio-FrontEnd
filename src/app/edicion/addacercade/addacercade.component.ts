import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcercadeServiceService } from 'src/app/servicios/acercade.service.service';

@Component({
  selector: 'app-addacercade',
  templateUrl: './addacercade.component.html',
  styleUrls: ['./addacercade.component.css'],
})
export class AddacercadeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sPersona: AcercadeServiceService
  ) {
    this.form = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      urlFoto: ['', [Validators.required]],
      email: [''],
      clave: [''],
    });
  }

  ngOnInit(): void {}

  get NombreCompleto() {
    return this.form.get('nombreCompleto');
  }

  get Informacion() {
    return this.form.get('informacion');
  }

  get UrlFoto() {
    return this.form.get('urlFoto');
  }

  get Email() {
    return this.form.get('email');
  }

  get Clave() {
    return this.form.get('clave');
  }

  onCreate(): void {
    this.sPersona.crearPersona(this.form.value).subscribe((data) => {
      alert('Persona Añadida');
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
