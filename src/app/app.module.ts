import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { EncabezadoComponent } from './encabezado/encabezado.component';
=======
import { ClientesComponent } from './clientes/clientes.component';
>>>>>>> Clientes
=======
import { ProductosComponent } from './productos/productos.component';
>>>>>>> Productos

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    EncabezadoComponent
=======
    ClientesComponent
>>>>>>> Clientes
=======
    ProductosComponent
>>>>>>> Productos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
