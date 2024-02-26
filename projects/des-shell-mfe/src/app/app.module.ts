import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DesSharedModule } from 'projects/des-shared/src/public-api';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DesSharedModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
