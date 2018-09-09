import { HomeComponent } from './componets/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalvaUsuarioComponent } from './componets/salva-usuario/salva-usuario.component';
import { DetalhesComponent } from './componets/detalhes/detalhes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cliente/salvar', component: SalvaUsuarioComponent},
  {path: 'cliente/salvar/:id', component: SalvaUsuarioComponent},
  {path: 'cliente/detalhes/:id', component: DetalhesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
