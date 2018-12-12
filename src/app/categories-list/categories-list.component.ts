import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Object[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe( categories => this.categories = categories);
  }

  itemClicked(href){
    const id = href.split('/');
    this.router.navigateByUrl('category/' + id[id.length - 1]);
  }
}
