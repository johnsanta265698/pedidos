import { Component, OnInit } from '@angular/core';

interface Clientes {
  nombre: string
  apellido: string
  edad: number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>()

  constructor() { }

  ngOnInit() {
    this.clientes.push(
      {
        nombre: 'John',
        apellido: 'Santa',
        edad: 23
      },
      {
        nombre: 'Maicol',
        apellido: 'Santa',
        edad: 16
      }
    )
  }

  guardarCliente() {
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
  }

  eliminarTodo(){
    localStorage.clear()
  }
}
