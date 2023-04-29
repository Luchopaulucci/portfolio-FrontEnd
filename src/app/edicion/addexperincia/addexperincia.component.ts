import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia.service.service';

@Component({
  selector: 'app-addexperincia',
  templateUrl: './addexperincia.component.html',
  styleUrls: ['./addexperincia.component.css'],
})
export class AddexperinciaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sExperiencia: ExperienciaServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      urlCertificado: ['', [Validators.required]],
      urlFotoCertificado: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Fecha() {
    return this.form.get('fecha');
  }

  get UrlCertificado() {
    return this.form.get('urlCertificado');
  }

  get UrlFotoCertificado() {
    return this.form.get('urlFotoCertificado');
  }

  onCreate(): void {
    this.sExperiencia.crearExperiencia(this.form.value).subscribe(data => {
      alert('Certificado Añadido');
      this.router.navigate(['']);
    });
  }

  limpiar(): void{
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
