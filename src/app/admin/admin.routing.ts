import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';

const adminRoutes: Routes = [
  { path: '', component: SettingsComponent},
];


export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
