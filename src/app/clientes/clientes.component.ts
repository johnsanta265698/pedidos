import { Component, OnInit } from '@angular/core';

interface Clientes {
  nombre: string
  apellido: string
  edad: number
}

interface Productos {
  nombre: string
  precio: number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  guardarCliente() {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>()
    clientesAgregar.push(
      {
        nombre: 'John',
        apellido: 'Santa',
        edad: 23
      },
      {
        nombre: 'Maicol',
        apellido: 'Santa',
        edad: 16
      },
      {
        nombre: 'Nohelia',
        apellido: 'Otalvaro',
        edad: 50
      },
    )
    localStorage.setItem('clientes', JSON.stringify(clientesAgregar))
  }

  guardarProductos() {
    let productosAgregar: Array<Productos> = new Array<Productos>()
    productosAgregar.push(
      {
        nombre: 'Club Colombia',
        precio: 3500
      },
      {
        nombre: 'Pilsen',
        precio: 2500
      },
      {
        nombre: 'Aguila',
        precio: 1100
      }
    )

    localStorage.setItem('productos', JSON.stringify(productosAgregar))
  }

  eliminarTodo() {
    localStorage.clear()
  }

  eliminarPorTipo(tipo: string) {
    localStorage.removeItem(tipo)
  }

  get clientesLocales(): Clientes[] {
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'))
    if (clientesLocalStorage == null) {
      return new Array<Clientes>()
    } else {
      return clientesLocalStorage
    }
  }

  get productosLocales(): Productos[]{
    let productosLocalStorage: Productos[] = JSON.parse(localStorage.getItem('productos'))
    if (productosLocalStorage == null) {
      return new Array<Productos>()
    } else {
      return productosLocalStorage
    }
  }
}
