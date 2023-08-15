import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {
  FooterComponent,
  NavbarComponent,
  PageNotFoundComponent,
} from './components';
import { counterReducer } from './store/reducer/counter.reducer';

export const COMPONENTS: any[] = [
  NavbarComponent,
  FooterComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer }),
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class DesSharedModule {}
