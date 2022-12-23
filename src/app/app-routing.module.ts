import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { AddacercadeComponent } from './edicion/addacercade/addacercade.component';
import { AddestudioComponent } from './edicion/addestudio/addestudio.component';
import { AddexperinciaComponent } from './edicion/addexperincia/addexperincia.component';
import { AddproyectoComponent } from './edicion/addproyecto/addproyecto.component';
import { AddskillComponent } from './edicion/addskill/addskill.component';
import { EditacercadeComponent } from './edicion/editacercade/editacercade.component';
import { EditestudioComponent } from './edicion/editestudio/editestudio.component';
import { EditexperienciaComponent } from './edicion/editexperiencia/editexperiencia.component';
import { EditproyectoComponent } from './edicion/editproyecto/editproyecto.component';
import { EditskillComponent } from './edicion/editskill/editskill.component';

const routes: Routes = [
  {path: '', component: IndexComponent,},
  {path: 'Login', component: LoginComponent},
  {path: 'Acercade', component:AcercaDeComponent},
  {path: 'Add-acercade', component:AddacercadeComponent},
  {path: 'Editar-acercade', component:EditacercadeComponent},
  {path: 'Add-experiencia', component:AddexperinciaComponent},
  {path: 'Editar-experiencia', component:EditexperienciaComponent},
  {path: 'Add-estudio', component:AddestudioComponent},
  {path: 'Editar-estudio', component:EditestudioComponent},
  {path: 'Add-habilidad', component:AddskillComponent},
  {path: 'Editar-habilidad', component:EditskillComponent},
  {path: 'Add-proyecto', component:AddproyectoComponent},
  {path: 'Editar-proyecto', component:EditproyectoComponent},
  {path: '**', component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
