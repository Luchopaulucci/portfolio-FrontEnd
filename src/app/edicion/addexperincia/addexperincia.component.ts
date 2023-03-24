import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addexperincia',
  templateUrl: './addexperincia.component.html',
  styleUrls: ['./addexperincia.component.css']
})
export class AddexperinciaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      area: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

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

  get TituloValid() {
    return this.Titulo?.touched && !this.Titulo.valid;
  }

  get AreaValid() {
    return this.Area?.touched && !this.Area.valid;
  }

  get DesdeValid() {
    return this.Desde?.touched && !this.Desde.valid;
  }

  get HastaValid() {
    return this.Hasta?.touched && !this.Hasta.valid;
  }



  onEnviar(event: Event){
    // detiene la propagacion o ejecucion del submit
    event.preventDefault;
    if(this.form.valid){
      // llamar al servicio para enviar datos al server
      // logica extra
      alert("El formulario ha sido enviado con exito!")
    }else{
      this.form.markAllAsTouched();
      alert("Se produjo un error al enviar el formulario! Revise los datos ingresados.")
    }
  }
}
