import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {CategoriesListComponent} from './categories-list/categories-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  },
  {
    path: 'categories',
    component: CategoriesListComponent
  },
  {
    path: 'category/:id',
    component: MoviesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
