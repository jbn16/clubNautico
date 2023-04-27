import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Socio/listar/listar.component';
import { AddComponent } from './Socio/add/add.component';
import { EditComponent } from './Socio/edit/edit.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'v0/api/inicio', pathMatch: 'full' },
  {path:'v0/api/inicio', component:InicioComponent},
  {path:'v0/api/socios', component:ListarComponent},
  {path:'v0/api/socios/insertar', component:AddComponent},
  {path:'v0/api/socios/editar', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
