import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LogsComponent } from './logs/logs.component';

const routes: Route[] = [
  {
    path: '',
    component: LogsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LogsComponent],
})
export class LogsModule {}
