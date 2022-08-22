import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhatakComponent } from './phatak/phatak.component';

const routes: Routes = [
  {path:'phatak', component: PhatakComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
