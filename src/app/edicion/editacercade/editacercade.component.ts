import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AcercadeServiceService } from 'src/app/servicios/acercade.service.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css'],
})
export class EditacercadeComponent implements OnInit {
  form: FormGroup;
  persona: Persona = null;

  constructor(
    private formBuilder: FormBuilder,
    private sPersona: AcercadeServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      urlFoto: ['', [Validators.required]],
    });
  }

  get NombreCompleto() {
    return this.form.get('nombreCompleto');
  }

  get Informacion() {
    return this.form.get('informacion');
  }

  get UrlFoto() {
    return this.form.get('urlFoto');
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.findPersona(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar la persona")
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.modificarPersona(id, this.persona).subscribe(
      data => {
        this.router.navigate([''])
      }, err =>{
        alert("Error al modificar la persona")
        this.router.navigate(['']);
      }
    )
  }


}
