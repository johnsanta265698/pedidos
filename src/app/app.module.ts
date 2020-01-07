import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EncabezadoComponent } from './encabezado/encabezado.component';
=======
import { ClientesComponent } from './clientes/clientes.component';
>>>>>>> Clientes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EncabezadoComponent
=======
    ClientesComponent
>>>>>>> Clientes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
