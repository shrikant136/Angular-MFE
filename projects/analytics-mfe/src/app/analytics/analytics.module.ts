import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendAnalysisComponent } from './trend-analysis/trend-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: TrendAnalysisComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TrendAnalysisComponent],
})
export class AnalyticsModule {}
