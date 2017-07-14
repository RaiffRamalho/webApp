import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { routing } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeService } from './home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AdminModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
