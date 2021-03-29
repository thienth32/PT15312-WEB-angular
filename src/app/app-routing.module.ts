import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './screens/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
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
        path: 'danh-muc',
        component: DanhMucComponent
      },
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
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
