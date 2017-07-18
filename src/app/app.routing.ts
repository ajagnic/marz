import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';

const appRoutes = [
  {
    path: '',
    component: RoverFormComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
