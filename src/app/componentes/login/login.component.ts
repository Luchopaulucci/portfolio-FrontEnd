import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  persona: Persona = new Persona(
    'nombreCompleto',
    'informacion',
    'id',
    'urlFoto',
    'email',
    'clave'
  );

  constructor(
    private formBuilder: FormBuilder,
    private ruta: Router,
    private authService: AutenticacionService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {}

  get Email() {
    return this.form.get('email');
  }

  get Clave() {
    return this.form.get('clave');
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.authService.loginPersona(JSON.stringify(this.form.value)).subscribe(
        (data) => {
          console.log('DATA: ' + JSON.stringify(data));
          window.location.reload();
        },
        (error) => {
          alert('error al iniciar sesion');
        }
      );this.ruta.navigate([''])
    } else {
      alert('Hay un error en el formulario');
    }
  }
}
