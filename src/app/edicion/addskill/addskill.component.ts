import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css'],
})
export class AddskillComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get Titulo() {
    return this.form.get('password');
  }

  get Porcentaje() {
    return this.form.get('email');
  }

  get TituloValid() {
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get PorcentajeValid() {
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert('Todo salio bien ¡Enviar formuario!');
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
      alert('todo mal');
    }
  }
}
