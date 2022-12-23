import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { AddestudioComponent } from './edicion/addestudio/addestudio.component';
import { AddacercadeComponent } from './edicion/addacercade/addacercade.component';
import { AddexperinciaComponent } from './edicion/addexperincia/addexperincia.component';
import { AddskillComponent } from './edicion/addskill/addskill.component';
import { AddproyectoComponent } from './edicion/addproyecto/addproyecto.component';
import { EliminarComponent } from './edicion/eliminar/eliminar.component';
import { EditacercadeComponent } from './edicion/editacercade/editacercade.component';
import { EditestudioComponent } from './edicion/editestudio/editestudio.component';
import { EditexperienciaComponent } from './edicion/editexperiencia/editexperiencia.component';
import { EditproyectoComponent } from './edicion/editproyecto/editproyecto.component';
import { EditskillComponent } from './edicion/editskill/editskill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ExperienciaComponent,
    LoginComponent,
    InicioComponent,
    ProyectosComponent,
    FooterComponent,
    IndexComponent,
    Pagina404Component,
    LogoutComponent,
    AddestudioComponent,
    AddacercadeComponent,
    AddexperinciaComponent,
    AddskillComponent,
    AddproyectoComponent,
    EliminarComponent,
    EditacercadeComponent,
    EditestudioComponent,
    EditexperienciaComponent,
    EditproyectoComponent,
    EditskillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
