import { Component, OnInit } from '@angular/core';

interface Clientes {
  nombre: string
  apellido: string
  edad: number
}

interface Productos{
  nombre: string
  precio: number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>()
  productos: Array<Productos> = new Array<Productos>()

  constructor() { }

  ngOnInit() {
  }

  guardarCliente() {
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
  }

  guardarProductos() {
    localStorage.setItem('productos', JSON.stringify(this.productos))
  }

  eliminarTodo(){
    localStorage.clear()
  }

  leer(){
    this.clientes = JSON.parse(localStorage.getItem('clientes'))
    this.productos = JSON.parse(localStorage.getItem('productos'))
  }

  eliminarPorTipo(tipo: string){
    localStorage.removeItem(tipo)
  }
}
