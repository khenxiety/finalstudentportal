import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StudentAdvisoriesComponent } from './dashboard/student-advisories/student-advisories.component';
import { StudentDashComponent } from './dashboard/student-dash/student-dash.component';
import { StudentSchedComponent } from './dashboard/student-sched/student-sched.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPortalComponent } from './pages/login-portal/login-portal.component';

import { PrintSchedComponent } from './pages/print-sched/print-sched.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

const routes: Routes = [

  {
    path:'', component: LoginPortalComponent,
    
    

  },
  {
    path:'login', component: LoginPortalComponent,
    
    

  },
  {
    path:'update-pass', component: UpdatePasswordComponent,
    
    

  },
  {
    
    path:'student-dash', component: StudentDashComponent
    

  },
  {
    
    path:'student-advisories', component: StudentAdvisoriesComponent
    

  },
  {
    
    path:'student-sched', component: StudentSchedComponent
    

  },
  {
    path:'sched',component:ScheduleComponent
  },
  {
    path:'print',component:PrintSchedComponent
  },
  {
    path:'error',component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
