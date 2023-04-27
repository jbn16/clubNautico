import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService }from '../../Service/service.service';
import { Socio } from 'src/app/Modelo/Socio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  public page!:number;

  socios:Socio[]=new Array<Socio>();

  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(){
    this.service.getSocios()
    .subscribe(data=>{
      this.socios=data;
    })
  }

  Editar(socio:Socio){
    localStorage.setItem("id",socio.id.toString());
    this.router.navigate(["v0/api/socios/editar"])
  }

  Eliminar(socio:Socio){
    if(confirm("¿Está seguro de que desea eliminar a este socio?")){
    this.service.deleteSocio(socio)
      .subscribe(data=>{
        this.socios=this.socios.filter(p=>p!==socio);
        alert("Socio eliminado con éxito!");
      })
    }
  }

}
