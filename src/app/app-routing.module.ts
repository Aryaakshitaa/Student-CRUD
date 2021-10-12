import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetAttendanceComponent } from './get-attendance/get-attendance.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "student-list",
    component: StudentListComponent

  },
  {
    path: "student-form",
    component: StudentFormComponent

  },
  {
    path: "student-edit/:id",
    component: StudentEditComponent
  },
  {
    path: "attendance-list",
    component: AttendanceComponent

  },
  {
    path: "get-attendance",
    component: GetAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
