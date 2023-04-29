import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectosServiceService } from 'src/app/servicios/proyectos.service.service';

@Component({
  selector: 'app-addproyecto',
  templateUrl: './addproyecto.component.html',
  styleUrls: ['./addproyecto.component.css'],
})
export class AddproyectoComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sProyecto: ProyectosServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      urlFotoProyecto: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get Titulo() {
    return this.form.get('titulo');
  }
  get Informacion() {
    return this.form.get('informacion');
  }
  get UrlFotoProyecto() {
    return this.form.get('urlFotoProyecto');
  }
  get UrlProyecto() {
    return this.form.get('urlProyecto');
  }

  onCreate(): void {
    this.sProyecto.crearProyectos(this.form.value).subscribe((data) => {
      alert('Proyecto Añadido');
      this.router.navigate(['']);
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
