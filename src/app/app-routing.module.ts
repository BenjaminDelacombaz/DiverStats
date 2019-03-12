import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivesComponent } from './views/dives/dives.component';

const routes: Routes = [
  { path: 'dives', component: DivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
