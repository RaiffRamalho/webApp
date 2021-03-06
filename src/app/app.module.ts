import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
// import { MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { routing } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeService } from './home/home.service';
import { EventEmmiterComponent } from './event-emmiter/event-emmiter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StartComponent,
    EventEmmiterComponent
    // MdIconModule
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    routing,
    AdminModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
