import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Socio } from 'src/app/Modelo/Socio';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  correoValido = false;

  telefonoValido = false;

  nombreValido = false;

  socio = new Socio();

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){

  }

  Insertar(socio:Socio){
    if (!this.validarCorreo(socio.correo.toString())) {
      alert("El correo no tiene un formato válido.");
    }
    else if (!this.validarTelefono(socio.telefono.toString())) {
      alert("El teléfono debe tener 9 caracteres numéricos.");
    }
    else if (!this.validarNombre(socio.nombre.toString())) {
      alert("El nombre debe tener al menos 2 caracteres.");
    }
    else{
    this.service.createSocio(socio)
    .subscribe(data=>{
      alert("Socio añadido con éxito");
      this.router.navigate(['v0/api/socios/insertar']);
  })
  }
  }

  validarCorreo(correo: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patronCorreo.test(correo);
  }

  validarTelefono(telefono: string): boolean {
    const regex = /^\d{9}$/;
    /*
    ^ es un ancla que indica el inicio de la cadena.
    \d es una clase de caracteres que se utiliza para indicar que se espera un dígito numérico del 0 al 9.
    {9} indica que se esperan 9 ocurrencias de la clase de caracteres \d.
    $ es otro ancla que indica el final de la cadena. 
    */
    return regex.test(telefono);
  }

  validarNombre(nombre:string): boolean{

    return nombre.length >= 2;

  }

}
