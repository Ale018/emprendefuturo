import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { DesplazamientoComponent } from './components/desplazamiento/desplazamiento.component';
import { AsistenteAsistenciaComponent } from './components/asistente-asistencia/asistente-asistencia.component';
import { AsistenteEvaluarComponent } from './components/asistente-evaluar/asistente-evaluar.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ParticipantesComponent,
    AsistentesComponent,
    LoginComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    HomeComponent,
    DesplazamientoComponent,
    AsistenteAsistenciaComponent,
    AsistenteEvaluarComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
