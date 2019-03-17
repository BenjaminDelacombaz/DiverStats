import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivesComponent } from './views/dives/dives.component';
import { CreateDiveComponent } from './views/create-dive/create-dive.component';
import { BuddiesComponent } from './views/buddies/buddies.component';
import { CreateBuddyComponent } from './views/create-buddy/create-buddy.component';
import { EditBuddyComponent } from './views/edit-buddy/edit-buddy.component';

const routes: Routes = [
  { path: 'dives', component: DivesComponent },
  { path: 'dives/create', component: CreateDiveComponent }, 
  { path: 'buddies', component: BuddiesComponent },
  { path: 'buddies/create', component: CreateBuddyComponent },
  { path: 'buddies/edit/:id', component: EditBuddyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
