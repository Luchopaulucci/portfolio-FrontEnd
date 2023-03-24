import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css'],
})
export class EditacercadeComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      urlFoto: ['', [Validators.required]],
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

  get NombreValid() {
    return this.NombreCompleto?.touched && !this.NombreCompleto.valid;
  }

  get InformacionValid() {
    return this.Informacion?.touched && !this.Informacion.valid;
  }

  get UrlFotoValid() {
    return this.UrlFoto?.touched && !this.UrlFoto.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert('El formulario ha sido enviado con exito!');
    } else {
      this.form.markAllAsTouched();
      alert(
        'Se produjo un error al enviar el formulario! Revise los datos ingresados.'
      );
    }
  }
}
