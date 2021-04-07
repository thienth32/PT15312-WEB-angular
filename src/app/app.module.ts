import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { GenderPipe } from './pipes/gender.pipe';
import { HomeComponent } from './screens/home/home.component';
import { DanhMucComponent } from './screens/danh-muc/danh-muc.component';
import { ClientLayoutComponent } from './screens/client-layout/client-layout.component';
import { AdminLayoutComponent } from './screens/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { QtDanhMucComponent } from './screens/admin/qt-danh-muc/qt-danh-muc.component';
import { QtNewDanhMucComponent } from './screens/admin/qt-new-danh-muc/qt-new-danh-muc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QtEditDanhMucComponent } from './screens/admin/qt-edit-danh-muc/qt-edit-danh-muc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroUnitComponent,
    GenderPipe,
    HomeComponent,
    DanhMucComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    QtDanhMucComponent,
    QtNewDanhMucComponent,
    QtEditDanhMucComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
