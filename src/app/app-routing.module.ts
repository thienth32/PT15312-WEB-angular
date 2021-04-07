import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './screens/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { QtDanhMucComponent } from './screens/admin/qt-danh-muc/qt-danh-muc.component';
import { QtEditDanhMucComponent } from './screens/admin/qt-edit-danh-muc/qt-edit-danh-muc.component';
import { QtNewDanhMucComponent } from './screens/admin/qt-new-danh-muc/qt-new-danh-muc.component';
import { ClientLayoutComponent } from './screens/client-layout/client-layout.component';
import { DanhMucComponent } from './screens/danh-muc/danh-muc.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: 'danh-muc/:id',
        component: DanhMucComponent
      },
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: 'dashboard',
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: 'danh-muc',
        component: QtDanhMucComponent
      },
      {
        path: 'danh-muc/tao-moi',
        component: QtNewDanhMucComponent
      },
      {
        path: 'danh-muc/sua/:id',
        component: QtEditDanhMucComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
