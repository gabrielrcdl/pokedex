import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', 
  loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule) //Saberá que terá que carregar as pág deste módulo
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
