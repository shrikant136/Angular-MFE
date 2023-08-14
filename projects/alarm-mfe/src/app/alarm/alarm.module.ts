import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmViewerComponent } from './alarm-viewer/alarm-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: AlarmViewerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AlarmViewerComponent],
})
export class AlarmModule {}
