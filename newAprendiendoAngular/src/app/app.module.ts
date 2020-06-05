// Estos de agualar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Routing, appRoutesProviders} from './app.routing'; //servidores y componentes
import { HttpClientModule} from '@angular/common/http';

//Estos son los modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';


import { CalculadoraPipes } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';







@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    HomeComponent,
    ZapatillasComponent,
    ExternoComponent,
    CalculadoraPipes,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Routing,
    HttpClientModule,

  ],
  providers: [
    appRoutesProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
