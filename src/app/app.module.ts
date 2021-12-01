import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentDashComponent } from './dashboard/student-dash/student-dash.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { StudentAdvisoriesComponent } from './dashboard/student-advisories/student-advisories.component';
import { StudentSchedComponent } from './dashboard/student-sched/student-sched.component';
import { LoginPortalComponent } from './pages/login-portal/login-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular-mat-imports
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';



import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPassComponent } from './modals/forgot-pass/forgot-pass.component';
import { ContactsComponent } from './modals/contacts/contacts.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PrintSchedComponent } from './pages/print-sched/print-sched.component';
import { SubjectListsComponent } from './components/subject-lists/subject-lists.component';
import { GradesListsComponent } from './components/grades-lists/grades-lists.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { SubjectTableComponent } from './components/subject-table/subject-table.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    
    StudentDashComponent,
    HeaderComponent,
    SideMenuComponent,
    StudentAdvisoriesComponent,
    StudentSchedComponent,
    LoginPortalComponent,
    ForgotPassComponent,
    ContactsComponent,
    ScheduleComponent,
    PrintSchedComponent,
    SubjectListsComponent,
    GradesListsComponent,
    ErrorPageComponent,
    GradesTableComponent,
    SubjectTableComponent,
    UpdatePasswordComponent,
    FilterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
