import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Socio } from 'src/app/Modelo/Socio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  socio=new Socio();

  correoValido = false;

  telefonoValido = false;

  nombreValido = false;

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    if(id){
      this.service.getSocioId(+id)
    .subscribe(data=>{
      this.socio=data;
    })
    }
  }

  Actualizar(socio:Socio){
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
    this.service.updateSocio(socio)
    .subscribe(data=>{
      this.socio=data;
      alert("El socio se ha actualizado con éxito!");
      this.router.navigate(["v0/api/socios"]);
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
