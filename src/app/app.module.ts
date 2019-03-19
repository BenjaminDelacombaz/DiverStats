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
import { DiveSitesFrequentationComponent } from './components/dive-sites-frequentation/dive-sites-frequentation.component';
import { DiveSiteDepthChartComponent } from './components/dive-site-depth-chart/dive-site-depth-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginFormComponent,
    DivesTableComponent,
    DivesComponent,
    DiveSitesFrequentationComponent,
    DiveSiteDepthChartComponent,
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
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent]
})
export class AppModule { }
