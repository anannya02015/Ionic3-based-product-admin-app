import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PRODUCTS } from './sampleproduct';

import {Observable} from 'rxjs/Observable';
/*
  Generated class for the ProductlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductlistProvider {

  constructor(public http: Http) {
    console.log('Hello ProductlistProvider Provider');
  }
  findAll() {
    return Observable.create(observer => {
        observer.next(PRODUCTS);
        observer.complete();
    });
}
/*
getFavorites() {
    return Observable.create(observer => {
        observer.next(favorites);
        observer.complete();
    });
}

favorite(property) {
    return Observable.create(observer => {
        let exists = false;
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].id === property.id) {
                exists = true;
                break;
            }
        }
        if (!exists) favorites.push(property);
        observer.next();
        observer.complete();
    });
}

unfavorite(property) {
    return Observable.create(observer => {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].id === property.id) {
                favorites.splice(i, 1);
                break;
            }
        }
        observer.next();
        observer.complete();
    });
}
*/

like(property) {
    return Observable.create(observer => {
      PRODUCTS[property.id - 1].likes++;
        observer.next(PRODUCTS[property.id - 1].likes);
        observer.complete();
    });
}


}
