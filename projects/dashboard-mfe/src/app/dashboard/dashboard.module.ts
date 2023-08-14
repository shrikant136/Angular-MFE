import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaugeComponent } from './gauge/gauge.component';

const routes: Routes = [
  {
    path: '',
    component: GaugeComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [GaugeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
