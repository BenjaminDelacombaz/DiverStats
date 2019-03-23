import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

// Angular material components
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Component
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DivesTableComponent } from './components/dives-table/dives-table.component';
import { DivesComponent } from './views/dives/dives.component';
import { DiveFormComponent } from './components/dive-form/dive-form.component';
import { CreateDiveComponent } from './views/create-dive/create-dive.component';
import { BuddiesComponent } from './views/buddies/buddies.component';
import { BuddiesTableComponent } from './components/buddies-table/buddies-table.component';
import { CreateBuddyComponent } from './views/create-buddy/create-buddy.component';
import { BuddyFormComponent } from './components/buddy-form/buddy-form.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { EditBuddyComponent } from './views/edit-buddy/edit-buddy.component';
import { DiveSitesFrequentationComponent } from './components/dive-sites-frequentation/dive-sites-frequentation.component';
import { DiveSiteDepthChartComponent } from './components/dive-site-depth-chart/dive-site-depth-chart.component';
import { DiveSitesComponent } from './views/dive-sites/dive-sites.component';
import { DiveSitesTableComponent } from './components/dive-sites-table/dive-sites-table.component';
import { DiveSiteFormComponent } from './components/dive-site-form/dive-site-form.component';
import { CreateDiveSiteComponent } from './views/create-dive-site/create-dive-site.component';
import { EditDiveSiteComponent } from './views/edit-dive-site/edit-dive-site.component';
import { EditDiveComponent } from './views/edit-dive/edit-dive.component';
import { SelectBuddiesComponent } from './components/select-buddies/select-buddies.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginFormComponent,
    DivesTableComponent,
    DivesComponent,
    DiveFormComponent,
    CreateDiveComponent,
    BuddiesComponent,
    BuddiesTableComponent,
    CreateBuddyComponent,
    BuddyFormComponent,
    ConfirmComponent,
    EditBuddyComponent,
    DiveSitesFrequentationComponent,
    DiveSiteDepthChartComponent,
    DiveSitesComponent,
    DiveSitesTableComponent,
    DiveSiteFormComponent,
    CreateDiveSiteComponent,
    EditDiveSiteComponent,
    EditDiveComponent,
    SelectBuddiesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    AngularFirestoreModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    NgxChartsModule,
    MatCheckboxModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent, ConfirmComponent, SelectBuddiesComponent]
})
export class AppModule { }
