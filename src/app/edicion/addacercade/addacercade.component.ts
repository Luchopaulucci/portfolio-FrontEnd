import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addacercade',
  templateUrl: './addacercade.component.html',
  styleUrls: ['./addacercade.component.css'],
})
export class AddacercadeComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      urlFoto: ['', [Validators.required]],
      email: [''],
      clave: ['']
    });
  }

  ngOnInit(): void {}

  get NombreCompleto() {
    return this.form.get('nombreCompleto');
  }

  get Informacion() {
    return this.form.get('informacion');
  }

  get UrlFoto(){
    return this.form.get('urlFoto');
  }

  get Email(){
    return this.form.get('email');
  }

  get Clave(){
    return this.form.get('clave');
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
