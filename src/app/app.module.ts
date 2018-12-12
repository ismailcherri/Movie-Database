import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';
import {Globals} from './app.globals';
import {ApiService} from './api.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CategoriesListComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [Globals, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
