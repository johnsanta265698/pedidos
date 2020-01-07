/**
 * Este servicio sera usado para guardar nuestros clientes en LocalStorage
 */
import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarLocalStorage(cliente: Cliente){

    let clientesAntiguos: Cliente[] = this.clientesLocalStorage
    cliente.clienteID = clientesAntiguos.length + 1

    clientesAntiguos.push(cliente)

    localStorage.setItem('clientes', JSON.stringify(clientesAntiguos))
  }

  get clientesLocalStorage() : Cliente[] {
    let clientesDesdeLocalStorage: Cliente[] = JSON.parse(localStorage.getItem('clientes'))
    if (clientesDesdeLocalStorage == null) {
      return new Array<Cliente>()
    } else {
      return clientesDesdeLocalStorage
    }
  }
}
