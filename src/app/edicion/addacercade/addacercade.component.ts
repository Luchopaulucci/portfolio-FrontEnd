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
      nombre: ['', [Validators.required]],
      fotoperfil: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get Nombre() {
    return this.form.get('nombre');
  }

  get Fotoperfil() {
    return this.form.get('fotoperfil');
  }

  get Informacion() {
    return this.form.get('informacion');
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get FotoperfilValid() {
    return this.Fotoperfil?.touched && !this.Fotoperfil.valid;
  }

  get InformacionValid() {
    return this.Informacion?.touched && !this.Informacion.valid;
  }



  onEnviar(event: Event) {
    // detiene la propagacion o ejecucion del submit
    event.preventDefault;
    if (this.form.valid) {
      // llamar al servicio para enviar datos al server
      // logica extra
      alert('El formulario ha sido enviado con exito!');
    } else {
      this.form.markAllAsTouched();
      alert(
        'Se produjo un error al enviar el formulario! Revise los datos ingresados.'
      );
    }
  }
}
