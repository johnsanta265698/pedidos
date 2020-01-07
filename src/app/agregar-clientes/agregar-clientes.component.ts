import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  //Variables
  formularioAgregar: FormGroup
  cliente: Cliente = new Cliente()

  constructor(private fb:FormBuilder, public clienteServicio: ClientesService) { }

  ngOnInit() {
    this.formularioAgregar = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        direccion: ['', Validators.required],
      }
    )
  }

  agregar(){
    this.cliente = this.formularioAgregar.value as Cliente
    this.clienteServicio.agregarLocalStorage(this.cliente)
    this.formularioAgregar.reset()
  }

}
