import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { EncabezadoComponent } from './encabezado/encabezado.component';
=======
import { ClientesComponent } from './clientes/clientes.component';
>>>>>>> Clientes
=======
import { ProductosComponent } from './productos/productos.component';
>>>>>>> Productos
=======
import { PedidosComponent } from './pedidos/pedidos.component';
>>>>>>> Pedidos

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    EncabezadoComponent
=======
    ClientesComponent
>>>>>>> Clientes
=======
    ProductosComponent
>>>>>>> Productos
=======
    PedidosComponent
>>>>>>> Pedidos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
