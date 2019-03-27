import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivesComponent } from './views/dives/dives.component';
import { CreateDiveComponent } from './views/create-dive/create-dive.component';
import { BuddiesComponent } from './views/buddies/buddies.component';
import { CreateBuddyComponent } from './views/create-buddy/create-buddy.component';
import { EditBuddyComponent } from './views/edit-buddy/edit-buddy.component';
import { DiveSitesComponent } from './views/dive-sites/dive-sites.component';
import { CreateDiveSiteComponent } from './views/create-dive-site/create-dive-site.component';
import { EditDiveSiteComponent } from './views/edit-dive-site/edit-dive-site.component';
import { EditDiveComponent } from './views/edit-dive/edit-dive.component';
import { HomeComponent } from './views/home/home.component';
import { StatsComponent } from './views/stats/stats.component';

const routes: Routes = [
  { path: 'dives', component: DivesComponent },
  { path: 'dives/create', component: CreateDiveComponent }, 
  { path: 'buddies', component: BuddiesComponent },
  { path: 'buddies/create', component: CreateBuddyComponent },
  { path: 'buddies/edit/:id', component: EditBuddyComponent},
  { path: 'dive-sites', component: DiveSitesComponent },
  { path: 'dive-sites/create', component: CreateDiveSiteComponent },
  { path: 'dive-sites/edit/:id', component: EditDiveSiteComponent },
  { path: 'dives/edit/:id', component: EditDiveComponent },
  { path: '', component: HomeComponent },
  { path: 'stats', component: StatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
