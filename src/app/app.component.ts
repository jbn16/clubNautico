import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CLUB NÁUTICO';

  constructor(private router:Router){}

  Inicio(){
    this.router.navigate(['v0/api/inicio']);
  }

  Listar(){
    this.router.navigate(['v0/api/socios']);
  }

  Insertar(){
    this.router.navigate(['v0/api/socios/insertar']);
  }

}
