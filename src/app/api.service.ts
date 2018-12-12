import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from './app.globals';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private globals: Globals) {}

  public getMovies(): Observable<any> {
    return this.http.get(this.globals.baseApiUrl + 'movies')
      .pipe(map((response: any) => response._embedded.movies));
  }

  public getMovieCategories(id: string): Observable<any> {
    return this.http.get(id)
      .pipe(map( (response: any) => response._embedded.categories));
  }

  public getCategoryMovies(id: string): Observable<any> {
    return this.http.get( this.globals.baseApiUrl + 'categories/' + id + '/movies')
      .pipe(map( (response: any) => response._embedded.movies));
  }

  public getCategories(): Observable<any> {
    return this.http.get(this.globals.baseApiUrl + 'categories')
      .pipe(map((response: any) => response._embedded.categories));
  }

  public getCategory(id): Observable<any> {
    return this.http.get(this.globals.baseApiUrl + 'categories/' + id);
  }
}
