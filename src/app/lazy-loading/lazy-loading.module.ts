import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ],
  declarations: [LazyLoadingComponent]
})
export class LazyLoadingModule { }
