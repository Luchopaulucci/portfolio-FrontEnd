import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({

      titulo: ['',[Validators.required]],
      porcentaje:['',[Validators.required]],
      
    })
  }
  
  ngOnInit() {}

// methods
  
  get Titulo(){
    return this.form.get("titulo")
  }
  get Porcentaje(){
    return this.form.get("porcentaje")
  }
  
  get TituloValid(){

    return this.Titulo?.touched && !this.Titulo.valid;

  }
  get PorcentajeValid(){

    return this.Porcentaje?.touched && !this.Porcentaje.valid;

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
