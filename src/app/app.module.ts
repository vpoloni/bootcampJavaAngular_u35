import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaClientesComponent } from './ejercicio1/alta-clientes/alta-clientes.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { ListadoClientesComponent } from './ejercicio1/listado-clientes/listado-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioContactoComponent } from './ejercicio2/formulario-contacto/formulario-contacto.component';
import { FormulariosEnviadosComponent } from './ejercicio2/formularios-enviados/formularios-enviados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    AltaClientesComponent,
    ListadoClientesComponent,
    FormularioContactoComponent,
    FormulariosEnviadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
