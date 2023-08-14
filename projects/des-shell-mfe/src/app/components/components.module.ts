import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, NavbarComponent } from './index';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent],
})
export class ComponentsModule {}
