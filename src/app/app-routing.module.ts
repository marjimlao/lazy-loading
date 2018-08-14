import { NoLazyLoadingComponent } from './components/no-lazy-loading/no-lazy-loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'no-lazy-loading',
    component: NoLazyLoadingComponent
  },
  {
    path: 'lazy-loading',
    loadChildren: './lazy-loading/lazy-loading.module#LazyLoadingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
