import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
