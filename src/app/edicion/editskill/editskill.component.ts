import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      porcentaje: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get Porcentaje() {
    return this.form.get('porcentaje');
  }

  get PorcentajeValid() {
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert('Todo salio bien ¡Enviar formuario!');
    } else {
      this.form.markAllAsTouched();
      alert(
        'Se produjo un error al enviar el formulario! Revise los datos ingresados.'
      );
    }
  }
}
