import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { adminRouting } from './admin.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    adminRouting
  ],
  declarations: [ProfileComponent, SettingsComponent],
  exports: [
    ProfileComponent
  ]
})
export class AdminModule { }
