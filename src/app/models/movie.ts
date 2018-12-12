import {Category} from './category';
import {ItemLinks} from './item-links';

export interface Movie {
  title?: string;
  categories: Category[];
  _links?: ItemLinks;
}


