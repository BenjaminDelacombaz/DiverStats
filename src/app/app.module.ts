import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent, ConfirmComponent]
})
export class AppModule { }
