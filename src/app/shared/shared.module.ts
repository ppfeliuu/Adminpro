import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BreadcrumComponent, SidebarComponent, HeaderComponent],
  exports: [BreadcrumComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
