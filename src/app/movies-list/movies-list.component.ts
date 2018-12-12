import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../models/movie';
import {Category} from '../models/category';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  title;
  movies: Movie[];
  categoryId;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => {
      if (this.categoryId) {
        this.categoryId = params.id;
        this.ngOnInit();
      } else {
        this.categoryId = params.id;
      }

    } );
  }

  ngOnInit() {
    if (this.categoryId) {
      this.getCategoryMovies();
    } else {
      this.getMovies();
    }
  }

  getMovies() {
    this.title = 'Movies';
    this.apiService.getMovies().subscribe( movies => {
      this.movies = movies;
      this.movies.forEach(
        (movie: any, index) => {
          this.apiService.getMovieCategories(movie._links.categories.href)
            .subscribe( (categories: Category[]) => {
              this.movies[index].categories = [];
              this.movies[index].categories = categories;
            });
        }
      );
    });
  }

  getCategoryMovies() {
    this.apiService.getCategory(this.categoryId).subscribe(
      category => {
        this.title = category.name;
      }
    );
    this.apiService.getCategoryMovies(this.categoryId).subscribe( movies => {
      this.movies = movies;
      this.movies.forEach(
        (movie: Movie, index) => {
          this.apiService.getMovieCategories(movie._links.categories.href)
            .subscribe( categories => {
              this.movies[index].categories = [];
              this.movies[index].categories = categories;
            });
        }
      );
    });
  }

  btnClicked(href: string) {
    const id = href.split('/');
    this.router.navigateByUrl('category/' + id[id.length - 1]);
  }
}
